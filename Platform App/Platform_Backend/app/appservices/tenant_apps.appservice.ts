import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_AppsDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_apps";
import { Tenant_App } from "../../submodules/Portfolio-Platform-Entities/tenant_apps.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/tenant_apps.mapper')

@Injectable()
export default class Tenant_AppsAppService extends AppService<Tenant_App,Tenant_AppsDto>{
    constructor(@InjectRepository(Tenant_App) private readonly tenant_appsRepository: Repository<Tenant_App>,public http:HttpService) {
        super(http,tenant_appsRepository,Tenant_App,Tenant_App,Tenant_AppsDto,dto.tenant_appsentityJson, dto.tenant_appsdtoJson,dto.tenant_appsentityToDtoJson, dto.tenant_appsdtoToEntityJson);
             
    }

} 