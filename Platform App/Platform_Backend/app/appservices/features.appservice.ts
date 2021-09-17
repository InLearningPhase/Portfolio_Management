import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeaturesDto } from "../../submodules/Portfolio-Platform-Dtos/features";
import { Feature } from "../../submodules/Portfolio-Platform-Entities/features.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/features.mapper')

@Injectable()
export default class FeaturesAppService extends AppService<Feature,FeaturesDto>{
    constructor(@InjectRepository(Feature) private readonly featuresRepository: Repository<Feature>,public http:HttpService) {
        super(http,featuresRepository,Feature,Feature,FeaturesDto,dto.featuresentityJson, dto.featuresdtoJson,dto.featuresentityToDtoJson, dto.featuresdtoToEntityJson);
             
    }

} 