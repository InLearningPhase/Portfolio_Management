import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TenantsDto } from "../../submodules/Portfolio-Platform-Dtos/tenants";
import { Tenant } from "../../submodules/Portfolio-Platform-Entities/tenants.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/tenants.mapper')

@Injectable()
export default class TenantsAppService extends AppService<Tenant,TenantsDto>{
    constructor(@InjectRepository(Tenant) private readonly tenantsRepository: Repository<Tenant>,public http:HttpService) {
        super(http,tenantsRepository,Tenant,Tenant,TenantsDto,dto.tenantsentityJson, dto.tenantsdtoJson,dto.tenantsentityToDtoJson, dto.tenantsdtoToEntityJson);
             
    }

} 