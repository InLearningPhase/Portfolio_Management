import { Injectable } from "@nestjs/common";
import RolesAppService from "../appservices/roles.appservice";
import { RolesDto } from "../../submodules/Portfolio-Platform-Dtos/roles";
import { Role } from "../../submodules/Portfolio-Platform-Entities/roles.entity";
import FacadeBase from "./facadebase";

@Injectable()
export class RolesFacade extends FacadeBase<Role,RolesDto>{
    constructor(private rolesAppService: RolesAppService){
       super(rolesAppService);
    }
}