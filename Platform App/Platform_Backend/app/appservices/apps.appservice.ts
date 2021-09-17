import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AppsDto } from "../../submodules/Portfolio-Platform-Dtos/apps";
import { App } from "../../submodules/Portfolio-Platform-Entities/apps.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/apps.mapper')

@Injectable()
export default class AppsAppService extends AppService<App,AppsDto>{
    constructor(@InjectRepository(App) private readonly appsRepository: Repository<App>,public http:HttpService) {
        super(http,appsRepository,App,App,AppsDto,dto.appsentityJson, dto.appsdtoJson,dto.appsentityToDtoJson, dto.appsdtoToEntityJson);
             
    }

} 