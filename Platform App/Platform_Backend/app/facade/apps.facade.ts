import { Injectable } from "@nestjs/common";
import AppsAppService from "../appservices/apps.appservice";
import { AppsDto } from "../../submodules/Portfolio-Platform-Dtos/apps";
import { App } from "../../submodules/Portfolio-Platform-Entities/apps.entity";
import FacadeBase from "./facadebase";

@Injectable()
export class AppsFacade extends FacadeBase<App,AppsDto>{
    constructor(private appsAppService: AppsAppService){
       super(appsAppService);
    }
}