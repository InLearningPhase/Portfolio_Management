import { Injectable } from "@nestjs/common";
import App_MessagesAppService from "../appservices/app_messages.appservice";
import { App_MessagesDto } from "../../submodules/Portfolio-Platform-Dtos/app_messages";
import { App_Message } from "../../submodules/Portfolio-Platform-Entities/app_messages.entity";
import FacadeBase from "./facadebase";

@Injectable()
export class App_MessagesFacade extends FacadeBase<App_Message,App_MessagesDto>{
    constructor(private app_messagesAppService: App_MessagesAppService){
       super(app_messagesAppService);
    }
}