import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
import { Stock } from "submodules/Portfolio-Main-Entities/stock";
import { stockDto } from "submodules/Portfolio-Main-Dtos/stockDto";
let dto = require('../../submodules/Portfolio-Main-Mapper/stockMapper')

@Injectable()
export default class StockAppService extends AppService<Stock,stockDto>{
    constructor(@InjectRepository(Stock) private readonly stockRepository: Repository<Stock>,public http:HttpService) {
        super(http,stockRepository,Stock,Stock,stockDto,dto.stockentityJson, dto.stockdtoJson,dto.stockentityToDtoJson, dto.stockdtoToEntityJson);
             
    }

} 