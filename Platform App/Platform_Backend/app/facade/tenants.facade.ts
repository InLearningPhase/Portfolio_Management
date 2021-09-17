import { Injectable } from "@nestjs/common";
import TenantsAppService from "../appservices/tenants.appservice";
import { TenantsDto } from "../../submodules/Portfolio-Platform-Dtos/tenants";
import { Tenant } from "../../submodules/Portfolio-Platform-Entities/tenants.entity";
import FacadeBase from "./facadebase";

@Injectable()
export class TenantsFacade extends FacadeBase<Tenant,TenantsDto>{
    constructor(private tenantsAppService: TenantsAppService){
       super(tenantsAppService);
    }
}