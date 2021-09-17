import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { OrderFacade } from '../facade/orderFacade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Request } from 'express';
import { SNS_SQS } from '../../submodules/Portfolio-Main-RabbitMQConfig/SNS_SQS';
import { orderDto } from '../../submodules/Portfolio-Main-Dtos/orderDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
import { Message } from '../../submodules/Portfolio-Platform-Common/Message';
import { RequestModelQuery } from 'submodules/Portfolio-Platform-Common/RequestModelQuery';


@Controller('orders')
export class OrderRoutes {

  constructor(private orderFacade: OrderFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['ORDERS_ADD', 'ORDERS_UPDATE', 'ORDERS_DELETE'];
  private serviceName = ['ORDERS_SERVICE','ORDERS_SERVICE', 'ORDERS_SERVICE'];

  onModuleInit() {

    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOforderDto: ResponseModel<orderDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
            
              case 'ORDERS_ADD':
                console.log("Inside ORDERS_ADD Topic");
                responseModelOforderDto = await this.createOrder(result["message"]);
                break;

              case 'ORDERS_UPDATE':
                console.log("Inside ORDERS_UPDATE Topic");
                responseModelOforderDto = await this.updateOrder(result["message"]);
                break;

                case 'ORDERS_DELETE':
                console.log("Inside ORDERS_DELETE Topic");
                responseModelOforderDto = await this.deleteOrder(result["message"]);
                break;
              

            }

            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOforderDto: RequestModel<orderDto> = result["message"];
            responseModelOforderDto.setSocketId(requestModelOforderDto.SocketId)
            responseModelOforderDto.setCommunityUrl(requestModelOforderDto.CommunityUrl);
            responseModelOforderDto.setRequestId(requestModelOforderDto.RequestGuid);
            responseModelOforderDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOforderDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOforderDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<orderDto> = new ResponseModel<orderDto>(null, null, null, null, null, null, null, null, null);;
              errorResult.setStatus(new Message("500", error, null))


              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allOrder() {
    try {
      console.log("Inside controller ......");
      return this.orderFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  getAllOrdersByIds(@Param('id') id: number): Promise<ResponseModel<orderDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.orderFacade.getByIds([id]);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/data/:id')
  getAllOrdersByUserId(@Param('id') id: number): Promise<ResponseModel<orderDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.orderFacade.getByUserId("order",id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/data/:ticker_symbol/:id')
  getSpecificOrdersByUserId(@Param('ticker_symbol') ticker_symbol: string, @Param('id') id: number): Promise<ResponseModel<orderDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.orderFacade.getSpecificOrderByUserId(ticker_symbol,id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/search')
  getAllOrdersBySearch(@Req() req: Request) {
    try {

      let requestModel: RequestModelQuery = JSON.parse(req.headers['requestmodel'].toString());
      console.log(requestModel)

      return this.orderFacade.search(requestModel);

    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @Get(":table/:ticker_symbol")
  getAllStockByTickerSymbol(@Param('table') table: string, @Param('ticker_symbol') ticker_symbol: string): Promise<ResponseModel<orderDto>> {
    try {
      console.log(ticker_symbol);
      return this.orderFacade.getByTickerSymbol(table, ticker_symbol);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/")
  async createOrder(@Body() body: RequestModel<orderDto>): Promise<ResponseModel<orderDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside Createorder of controller....body id" + JSON.stringify(body));
      let result = await this.orderFacade.create(body);

      return result;
      // return null;
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateOrder(@Body() body: RequestModel<orderDto>): Promise<ResponseModel<orderDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside updateorder of controller....body id" + JSON.stringify(body));

      console.log("Executing update query..............")
      return await this.orderFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteOrder(@Body() body:RequestModel<orderDto>): Promise<ResponseModel<orderDto>>{
    try {

      return this.orderFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}