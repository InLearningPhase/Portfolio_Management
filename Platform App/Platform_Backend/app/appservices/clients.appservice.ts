import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientsDto } from "../../submodules/Portfolio-Platform-Dtos/clients";
import { Client } from "../../submodules/Portfolio-Platform-Entities/clients.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/clients.mapper')

@Injectable()
export default class ClientsAppService extends AppService<Client,ClientsDto>{
    constructor(@InjectRepository(Client) private readonly clientsRepository: Repository<Client>,public http:HttpService) {
        super(http,clientsRepository,Client,Client,ClientsDto,dto.clientsentityJson, dto.clientsdtoJson,dto.clientsentityToDtoJson, dto.clientsdtoToEntityJson);
             
    }

} 