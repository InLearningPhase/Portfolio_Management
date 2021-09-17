import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { TradeFacade } from '../facade/tradeFacade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Request } from 'express';
import { SNS_SQS } from '../../submodules/Portfolio-Main-RabbitMQConfig/SNS_SQS';
import { tradeDto } from '../../submodules/Portfolio-Main-Dtos/tradeDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
import { Message } from '../../submodules/Portfolio-Platform-Common/Message';
import { RequestModelQuery } from 'submodules/Portfolio-Platform-Common/RequestModelQuery';


@Controller('trades')
export class TradeRoutes {

  constructor(private tradeFacade: TradeFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['TRADES_ADD', 'TRADES_UPDATE', 'TRADES_DELETE'];
  private serviceName = ['TRADES_SERVICE','TRADES_SERVICE', 'TRADES_SERVICE'];

  onModuleInit() {

    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOftradeDto: ResponseModel<tradeDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
            
              case 'TRADES_ADD':
                console.log("Inside TRADES_ADD Topic");
                responseModelOftradeDto = await this.createTrade(result["message"]);
                break;

              case 'TRADES_UPDATE':
                console.log("Inside TRADES_UPDATE Topic");
                responseModelOftradeDto = await this.updateTrade(result["message"]);
                break;

                case 'TRADES_DELETE':
                console.log("Inside TRADES_DELETE Topic");
                responseModelOftradeDto = await this.deleteTrade(result["message"]);
                break;
              

            }

            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOftradeDto: RequestModel<tradeDto> = result["message"];
            responseModelOftradeDto.setSocketId(requestModelOftradeDto.SocketId)
            responseModelOftradeDto.setCommunityUrl(requestModelOftradeDto.CommunityUrl);
            responseModelOftradeDto.setRequestId(requestModelOftradeDto.RequestGuid);
            responseModelOftradeDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOftradeDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOftradeDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<tradeDto> = new ResponseModel<tradeDto>(null, null, null, null, null, null, null, null, null);;
              errorResult.setStatus(new Message("500", error, null))


              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allTrade() {
    try {
      console.log("Inside controller ......");
      return this.tradeFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  getAllTradesByIds(@Param('id') id: number): Promise<ResponseModel<tradeDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.tradeFacade.getByIds([id]);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/search')
  getAllTradesBySearch(@Req() req: Request) {
    try {

      let requestModel: RequestModelQuery = JSON.parse(req.headers['requestmodel'].toString());
      console.log(requestModel)

      return this.tradeFacade.search(requestModel);

    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @Post("/")
  async createTrade(@Body() body: RequestModel<tradeDto>): Promise<ResponseModel<tradeDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside Createtrade of controller....body id" + JSON.stringify(body));
      let result = await this.tradeFacade.create(body);

      return result;
      // return null;
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateTrade(@Body() body: RequestModel<tradeDto>): Promise<ResponseModel<tradeDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside updatetrade of controller....body id" + JSON.stringify(body));

      console.log("Executing update query..............")
      return await this.tradeFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteTrade(@Body() body:RequestModel<tradeDto>): Promise<ResponseModel<tradeDto>>{
    try {

      return this.tradeFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}