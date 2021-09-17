import { Injectable } from "@nestjs/common";
import ClientsAppService from "../appservices/clients.appservice";
import { ClientsDto } from "../../submodules/Portfolio-Platform-Dtos/clients";
import { Client } from "../../submodules/Portfolio-Platform-Entities/clients.entity";
import FacadeBase from "./facadebase";

@Injectable()
export class ClientsFacade extends FacadeBase<Client,ClientsDto>{
    constructor(private clientsAppService: ClientsAppService){
       super(clientsAppService);
    }
}