import { Injectable } from "@nestjs/common";
import StockAppService from "app/appServices/stockAppService";
import { stockDto } from "submodules/Portfolio-Main-Dtos/stockDto";
import { Stock } from "submodules/Portfolio-Main-Entities/stock";
import FacadeBase from "./facadeBase";

@Injectable()
export class StockFacade extends FacadeBase<Stock,stockDto>{
    constructor(private orderAppService: StockAppService){
       super(orderAppService);
    }
}