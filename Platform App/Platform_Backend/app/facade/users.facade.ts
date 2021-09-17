import { Injectable } from "@nestjs/common";
import UsersAppService from "../appservices/users.appservice";
import { UsersDto } from "../../submodules/Portfolio-Platform-Dtos/users";
import { User } from "../../submodules/Portfolio-Platform-Entities/users.entity";
import FacadeBase from "./facadebase";

@Injectable()
export class UsersFacade extends FacadeBase<User,UsersDto>{
    constructor(private usersAppService: UsersAppService){
       super(usersAppService);
    }
}