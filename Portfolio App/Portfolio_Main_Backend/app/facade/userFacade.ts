import { Injectable } from "@nestjs/common";
import UserAppService from "../appServices/userAppService";
import { userDto } from "../../submodules/Portfolio-Main-Dtos/userDto"
import { User } from "../../submodules/Portfolio-Main-Entities/user";
import FacadeBase from "./facadeBase";

@Injectable()
export class UserFacade extends FacadeBase<User,userDto>{
    constructor(private userAppService: UserAppService){
       super(userAppService);
    }
}