import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { tradeDto } from "../../submodules/Portfolio-Main-Dtos/tradeDto";
import { Trade } from "../../submodules/Portfolio-Main-Entities/trade";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Main-Mapper/tradeMapper')

@Injectable()
export default class TradeAppService extends AppService<Trade,tradeDto>{
    constructor(@InjectRepository(Trade) private readonly tradeRepository: Repository<Trade>,public http:HttpService) {
        super(http,tradeRepository,Trade,Trade,tradeDto,dto.tradeentityJson, dto.tradedtoJson,dto.tradeentityToDtoJson, dto.tradedtoToEntityJson);
             
    }

} 