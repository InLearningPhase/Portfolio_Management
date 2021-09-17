import { Injectable } from "@nestjs/common";
import OrderAppService from "../appServices/orderAppService";
import { orderDto } from "../../submodules/Portfolio-Main-Dtos/orderDto"
import { Order } from "../../submodules/Portfolio-Main-Entities/order";
import FacadeBase from "./facadeBase";

@Injectable()
export class OrderFacade extends FacadeBase<Order,orderDto>{
    constructor(private orderAppService: OrderAppService){
       super(orderAppService);
    }
}