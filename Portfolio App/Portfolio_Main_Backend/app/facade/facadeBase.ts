import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DtoBase } from "../../submodules/Portfolio-Main-Dtos/DtoBase/DtoBase";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { EntityBase } from "../../submodules/Portfolio-Main-Entities/EntityBase/EntityBase";
import { RequestModel } from "../../submodules/Portfolio-Platform-Common/RequestModel";
import { ResponseModel } from "../../submodules/Portfolio-Platform-Common/ResponseModel";
import { RequestModelQuery } from "submodules/Portfolio-Platform-Common/RequestModelQuery";

@Injectable()
export default class FacadeBase<TEntity extends EntityBase, TDto extends DtoBase>{
  private appService: AppService<TEntity, TDto>;
  constructor(private service: AppService<TEntity, TDto>) {
    this.appService = service;

  }

  async getAll() {
    try {
      console.log("Inside facade");
      return this.appService.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByIds(ids: number[]): Promise<ResponseModel<TDto>> {
    try {
      console.log("Inside facade ......");
      return this.appService.getByIds(ids);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByUserId(table:string, id: number): Promise<ResponseModel<TDto>> {
    try {
      console.log("Inside facade ......");
      return this.appService.getByUserId(table, id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getSpecificOrderByUserId(ticker_symbol:string, id: number): Promise<ResponseModel<TDto>> {
    try {
      console.log("Inside facade ......");
      return this.appService.getSpecificOrderByUserId(ticker_symbol, id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByTickerSymbol(table: string, ticker_symbol: string): Promise<ResponseModel<TDto>> {
    try {
      console.log("Inside facade ......");
      return this.appService.getByTickerSymbol(table, ticker_symbol);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUserBySub(sub: string): Promise<ResponseModel<TDto>> {
    try {
      console.log("Inside facade ......");
      return this.appService.getUserBySub(sub);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async search(requestModel: RequestModelQuery) {
    try {
      console.log("Inside facade ......group by pageSize & pageNumber");
      let result = await this.appService.search(requestModel);
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async create(body: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    try {
      console.log("Inside CreateProduct of facade....body id" + JSON.stringify(body));
      let result = await this.appService.create(body);

      return result;

    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(body: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    try {
      console.log("Inside UpdatePortfolio of facade....body id" + JSON.stringify(body));

      console.log("Executing update query..............")
      return await this.appService.updateEntity(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async deleteById(body: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    let delete_ids: Array<number> = [];
    body.DataCollection.forEach((entity: TDto) => {
      delete_ids.push(entity.id);

    })
    console.log("Ids are......", delete_ids);
    return this.appService.deleteById(delete_ids);
  }

}