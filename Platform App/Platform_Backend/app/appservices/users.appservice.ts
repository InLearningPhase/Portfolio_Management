import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersDto } from "../../submodules/Portfolio-Platform-Dtos/users";
import { User } from "../../submodules/Portfolio-Platform-Entities/users.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/users.mapper')

@Injectable()
export default class UsersAppService extends AppService<User,UsersDto>{
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,public http:HttpService) {
        super(http,usersRepository,User,User,UsersDto,dto.usersentityJson, dto.usersdtoJson,dto.usersentityToDtoJson, dto.usersdtoToEntityJson);
             
    }

} 