import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_UsersDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_users";
import { Tenant_User } from "../../submodules/Portfolio-Platform-Entities/tenant_users.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/tenant_users.mapper')

@Injectable()
export default class Tenant_UsersAppService extends AppService<Tenant_User,Tenant_UsersDto>{
    constructor(@InjectRepository(Tenant_User) private readonly tenant_usersRepository: Repository<Tenant_User>,public http:HttpService) {
        super(http,tenant_usersRepository,Tenant_User,Tenant_User,Tenant_UsersDto,dto.tenant_usersentityJson, dto.tenant_usersdtoJson,dto.tenant_usersentityToDtoJson, dto.tenant_usersdtoToEntityJson);
             
    }

} 