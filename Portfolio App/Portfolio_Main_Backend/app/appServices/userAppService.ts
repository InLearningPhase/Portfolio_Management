import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userDto } from "../../submodules/Portfolio-Main-Dtos/userDto";
import { User } from "../../submodules/Portfolio-Main-Entities/user";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Main-Mapper/userMapper')

@Injectable()
export default class UserAppService extends AppService<User,userDto>{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,public http:HttpService) {
        super(http,userRepository,User,User,userDto,dto.userentityJson, dto.userdtoJson,dto.userentityToDtoJson, dto.userdtoToEntityJson);
             
    }

} 