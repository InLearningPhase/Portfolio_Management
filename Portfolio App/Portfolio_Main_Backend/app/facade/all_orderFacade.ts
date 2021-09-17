import { Injectable } from "@nestjs/common";;
import { allOrderDto } from "../../submodules/Portfolio-Main-Dtos/all_orderDto"
import { AllOrder } from "../../submodules/Portfolio-Main-Entities/all_order";
import FacadeBase from "./facadeBase";
import AllOrderAppService from "app/appServices/all_orderAppService";

@Injectable()
export class AllOrderFacade extends FacadeBase<AllOrder,allOrderDto>{
    constructor(private allOrderAppService: AllOrderAppService){
       super(allOrderAppService);
    }
}