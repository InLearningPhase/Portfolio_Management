import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { App_MessagesDto } from "../../submodules/Portfolio-Platform-Dtos/app_messages";
import { App_Message } from "../../submodules/Portfolio-Platform-Entities/app_messages.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/app_messages.mapper')

@Injectable()
export default class App_MessagesAppService extends AppService<App_Message,App_MessagesDto>{
    constructor(@InjectRepository(App_Message) private readonly app_messagesRepository: Repository<App_Message>,public http:HttpService) {
        super(http,app_messagesRepository,App_Message,App_Message,App_MessagesDto,dto.app_messagesentityJson, dto.app_messagesdtoJson,dto.app_messagesentityToDtoJson, dto.app_messagesdtoToEntityJson);
             
    }

} 