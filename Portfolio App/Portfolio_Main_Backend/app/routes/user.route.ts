import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { UserFacade } from '../facade/userFacade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Request } from 'express';
import { SNS_SQS } from '../../submodules/Portfolio-Main-RabbitMQConfig/SNS_SQS';
import { userDto } from '../../submodules/Portfolio-Main-Dtos/userDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
import { Message } from '../../submodules/Portfolio-Platform-Common/Message';
import { RequestModelQuery } from 'submodules/Portfolio-Platform-Common/RequestModelQuery';


@Controller('users')
export class UserRoutes {

  constructor(private userFacade: UserFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['USERS_ADD', 'USERS_UPDATE', 'USERS_DELETE'];
  private serviceName = ['USERS_SERVICE','USERS_SERVICE', 'USERS_SERVICE'];

  onModuleInit() {

    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfUserDto: ResponseModel<userDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
            
              case 'USERS_ADD':
                console.log("Inside USERS_ADD Topic");
                responseModelOfUserDto = await this.createUser(result["message"]);
                break;

              case 'USERS_UPDATE':
                console.log("Inside USERS_UPDATE Topic");
                responseModelOfUserDto = await this.updateUser(result["message"]);
                break;

                case 'USERS_DELETE':
                console.log("Inside USERS_DELETE Topic");
                responseModelOfUserDto = await this.deleteUser(result["message"]);
                break;
              

            }

            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfUserDto: RequestModel<userDto> = result["message"];
            responseModelOfUserDto.setSocketId(requestModelOfUserDto.SocketId)
            responseModelOfUserDto.setCommunityUrl(requestModelOfUserDto.CommunityUrl);
            responseModelOfUserDto.setRequestId(requestModelOfUserDto.RequestGuid);
            responseModelOfUserDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfUserDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfUserDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<userDto> = new ResponseModel<userDto>(null, null, null, null, null, null, null, null, null);;
              errorResult.setStatus(new Message("500", error, null))


              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allUser() {
    try {
      console.log("Inside controller ......");
      return this.userFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  getAllUsersByIds(@Param('id') id: number): Promise<ResponseModel<userDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.userFacade.getByIds([id]);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/unique/:sub')
  getUserBySub(@Param('sub') sub: string): Promise<ResponseModel<userDto>> {
    try {
      return this.userFacade.getUserBySub(sub);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/search')
  getAllUsersBySearch(@Req() req: Request) {
    try {

      let requestModel: RequestModelQuery = JSON.parse(req.headers['requestmodel'].toString());
      console.log(requestModel)

      return this.userFacade.search(requestModel);

    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @Post("/")
  async createUser(@Body() body: RequestModel<userDto>): Promise<ResponseModel<userDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside CreateUser of controller....body id" + JSON.stringify(body));
      let result = await this.userFacade.create(body);

      return result;
      // return null;
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateUser(@Body() body: RequestModel<userDto>): Promise<ResponseModel<userDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      console.log("Inside updateUser of controller....body id" + JSON.stringify(body));

      console.log("Executing update query..............")
      return await this.userFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteUser(@Body() body:RequestModel<userDto>): Promise<ResponseModel<userDto>>{
    try {

      return this.userFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}