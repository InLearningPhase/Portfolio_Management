import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { orderDto } from "../../submodules/Portfolio-Main-Dtos/orderDto";
import { Order } from "../../submodules/Portfolio-Main-Entities/order";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Main-Mapper/orderMapper')

@Injectable()
export default class OrderAppService extends AppService<Order,orderDto>{
    constructor(@InjectRepository(Order) private readonly orderRepository: Repository<Order>,public http:HttpService) {
        super(http,orderRepository,Order,Order,orderDto,dto.orderentityJson, dto.orderdtoJson,dto.orderentityToDtoJson, dto.orderdtoToEntityJson);
             
    }

} 