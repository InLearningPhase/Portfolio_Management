import { Injectable } from "@nestjs/common";
import TradeAppService from "../appServices/tradeAppService";
import { tradeDto } from "../../submodules/Portfolio-Main-Dtos/tradeDto"
import { Trade } from "../../submodules/Portfolio-Main-Entities/trade";
import FacadeBase from "./facadeBase";

@Injectable()
export class TradeFacade extends FacadeBase<Trade,tradeDto>{
    constructor(private tradeAppService: TradeAppService){
       super(tradeAppService);
    }
}