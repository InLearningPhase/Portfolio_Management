import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RolesDto } from "../../submodules/Portfolio-Platform-Dtos/roles";
import { Role } from "../../submodules/Portfolio-Platform-Entities/roles.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/roles.mapper')

@Injectable()
export default class RolesAppService extends AppService<Role,RolesDto>{
    constructor(@InjectRepository(Role) private readonly rolesRepository: Repository<Role>,public http:HttpService) {
        super(http,rolesRepository,Role,Role,RolesDto,dto.rolesentityJson, dto.rolesdtoJson,dto.rolesentityToDtoJson, dto.rolesdtoToEntityJson);
             
    }
} 