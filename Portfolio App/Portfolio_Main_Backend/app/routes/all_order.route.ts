import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Request } from 'express';
import { SNS_SQS } from '../../submodules/Portfolio-Main-RabbitMQConfig/SNS_SQS';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
import { Message } from '../../submodules/Portfolio-Platform-Common/Message';
import { RequestModelQuery } from 'submodules/Portfolio-Platform-Common/RequestModelQuery';
import { allOrderDto } from 'submodules/Portfolio-Main-Dtos/all_orderDto';
import { AllOrderFacade } from 'app/facade/all_orderFacade';


@Controller('allOrders')
export class AllOrderRoutes {

  constructor(private allOrderFacade: AllOrderFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['ALLORDERS_ADD', 'ALLORDERS_UPDATE', 'ALLORDERS_DELETE'];
  private serviceName = ['ALLORDERS_SERVICE','ALLORDERS_SERVICE', 'ALLORDERS_SERVICE'];

  onModuleInit() {

    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfallOrderDto: ResponseModel<allOrderDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
            
              case 'ALLORDERS_ADD':
                console.log("Inside ALLORDERS_ADD Topic");
                responseModelOfallOrderDto = await this.createOrder(result["message"]);
                break;

              case 'ALLORDERS_UPDATE':
                console.log("Inside ALLORDERS_UPDATE Topic");
                responseModelOfallOrderDto = await this.updateOrder(result["message"]);
                break;

                case 'ALLORDERS_DELETE':
                console.log("Inside ALLORDERS_DELETE Topic");
                responseModelOfallOrderDto = await this.deleteOrder(result["message"]);
                break;
              

            }

            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfallOrderDto: RequestModel<allOrderDto> = result["message"];
            responseModelOfallOrderDto.setSocketId(requestModelOfallOrderDto.SocketId)
            responseModelOfallOrderDto.setCommunityUrl(requestModelOfallOrderDto.CommunityUrl);
            responseModelOfallOrderDto.setRequestId(requestModelOfallOrderDto.RequestGuid);
            responseModelOfallOrderDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfallOrderDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfallOrderDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<allOrderDto> = new ResponseModel<allOrderDto>(null, null, null, null, null, null, null, null, null);;
              errorResult.setStatus(new Message("500", error, null))


              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allallOrder() {
    try {
      console.log("Inside controller ......");
      return this.allOrderFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  getAllOrdersByIds(@Param('id') id: number): Promise<ResponseModel<allOrderDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.allOrderFacade.getByIds([id]);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/data/:id')
  getAllOrdersByUserId(@Param('id') id: number): Promise<ResponseModel<allOrderDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.allOrderFacade.getByUserId("all_order",id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/search')
  getAllOrdersBySearch(@Req() req: Request) {
    try {

      let requestModel: RequestModelQuery = JSON.parse(req.headers['requestmodel'].toString());
      console.log(requestModel)

      return this.allOrderFacade.search(requestModel);

    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @Get(":table/:ticker_symbol")
  getAllStockByTickerSymbol(@Param('table') table: string, @Param('ticker_symbol') ticker_symbol: string): Promise<ResponseModel<allOrderDto>> {
    try {
      console.log(ticker_symbol);
      return this.allOrderFacade.getByTickerSymbol(table, ticker_symbol);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/")
  async createOrder(@Body() body: RequestModel<allOrderDto>): Promise<ResponseModel<allOrderDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside CreateallOrder of controller....body id" + JSON.stringify(body));
      let result = await this.allOrderFacade.create(body);

      return result;
      // return null;
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateOrder(@Body() body: RequestModel<allOrderDto>): Promise<ResponseModel<allOrderDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside updateallOrder of controller....body id" + JSON.stringify(body));

      console.log("Executing update query..............")
      return await this.allOrderFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteOrder(@Body() body:RequestModel<allOrderDto>): Promise<ResponseModel<allOrderDto>>{
    try {

      return this.allOrderFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}