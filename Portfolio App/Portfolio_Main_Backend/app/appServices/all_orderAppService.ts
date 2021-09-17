import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { allOrderDto } from "../../submodules/Portfolio-Main-Dtos/all_orderDto";
import { AllOrder } from "../../submodules/Portfolio-Main-Entities/all_order";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Main-Mapper/all_orderMapper')

@Injectable()
export default class AllOrderAppService extends AppService<AllOrder,allOrderDto>{
    constructor(@InjectRepository(AllOrder) private readonly orderRepository: Repository<AllOrder>,public http:HttpService) {
        super(http,orderRepository,AllOrder,AllOrder,allOrderDto,dto.allorderentityJson, dto.allorderdtoJson,dto.allorderentityToDtoJson, dto.allorderdtoToEntityJson);
             
    }

} 