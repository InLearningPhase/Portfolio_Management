import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { App_RolesDto } from "../../submodules/Portfolio-Platform-Dtos/app_roles";
import { App_Role } from "../../submodules/Portfolio-Platform-Entities/app_roles.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/app_roles.mapper')

@Injectable()
export default class App_RolesAppService extends AppService<App_Role,App_RolesDto>{
    constructor(@InjectRepository(App_Role) private readonly app_rolesRepository: Repository<App_Role>,public http:HttpService) {
        super(http,app_rolesRepository,App_Role,App_Role,App_RolesDto,dto.app_rolesentityJson, dto.app_rolesdtoJson,dto.app_rolesentityToDtoJson, dto.app_rolesdtoToEntityJson);
             
    }

} 