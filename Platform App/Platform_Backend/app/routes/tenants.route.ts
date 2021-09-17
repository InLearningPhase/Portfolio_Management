import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';
import { TenantsFacade } from '../facade/tenants.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { SNS_SQS } from '../../submodules/Portfolio-Platform-RabbitMQConfig/SNS_SQS';
import { TenantsDto } from '../../submodules/Portfolio-Platform-Dtos/tenants';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
import { Message } from '../../submodules/Portfolio-Platform-Common/Message';
import { RequestModelQuery } from 'submodules/Portfolio-Platform-Common/RequestModelQuery';
import { Request } from 'express';

@Controller('tenants')
export class TenantsRoutes {

  constructor(private tenantsFacade: TenantsFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['TENANTS_ADD', 'TENANTS_UPDATE', 'TENANTS_DELETE'];
  private serviceName = ['TENANTS_SERVICE', 'TENANTS_SERVICE', 'TENANTS_SERVICE'];

  onModuleInit() {

    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("\nResult is........" + JSON.stringify(result));
          try {
            let responseModelOfTenantsDto: ResponseModel<TenantsDto> = null;
            console.log(`\nlistening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'TENANTS_ADD':
                console.log("\nInside TENANTS_ADD Topic");
                responseModelOfTenantsDto = await this.createTenants(result["message"]);
                break;
              case 'TENANTS_UPDATE':
                console.log("Inside TENANTS_UPDATE Topic");
                responseModelOfTenantsDto = await this.updateTenants(result["message"]);
                break;
              case 'TENANTS_DELETE':
                console.log("Inside TENANTS_DELETE Topic");
                responseModelOfTenantsDto = await this.deleteTenants(result["message"]);
                break;

            }

            console.log("\nResult of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfTenantsDto: RequestModel<TenantsDto> = result["message"];
            responseModelOfTenantsDto.setSocketId(requestModelOfTenantsDto.SocketId)
            responseModelOfTenantsDto.setCommunityUrl(requestModelOfTenantsDto.CommunityUrl);
            responseModelOfTenantsDto.setRequestId(requestModelOfTenantsDto.RequestGuid);
            responseModelOfTenantsDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("\nELEMENT: ", JSON.stringify(responseModelOfTenantsDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfTenantsDto)
            }
          }
          catch (error) {
            console.log("\nInside Catch.........");
            console.log(error);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<TenantsDto> = new ResponseModel<TenantsDto>(null, null, null, null, null, null, null, null, null);
              let requestModelOfTenantsDto: RequestModel<TenantsDto> = result["message"];
              errorResult.setStatus(new Message("500", error, null))
              errorResult.setSocketId(requestModelOfTenantsDto.SocketId)
              errorResult.setCommunityUrl(requestModelOfTenantsDto.CommunityUrl);
              errorResult.setRequestId(requestModelOfTenantsDto.RequestGuid);

              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allTenants() {
    try {

      return this.tenantsFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  getAllProductsByIds(@Param('id') id: number): Promise<ResponseModel<TenantsDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.tenantsFacade.getByIds([id]);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/search')
  getAllTenantsBySearch(@Req() req: Request) {
    try {

      let requestModel: RequestModelQuery = JSON.parse(req.headers['requestmodel'].toString());
      console.log(requestModel)

      return this.tenantsFacade.search(requestModel);

    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @Post("/")
  async createTenants(@Body() body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      let result = await this.tenantsFacade.create(body);

      return result;
      return null;
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateTenants(@Body() body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      console.log("Executing update query..............")
      return await this.tenantsFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteTenants(@Body() body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>> {
    try {

      return this.tenantsFacade.deleteById(body);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}