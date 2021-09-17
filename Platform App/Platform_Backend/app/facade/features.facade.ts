import { Injectable } from "@nestjs/common";
import FeaturesAppService from "../appservices/features.appservice";
import { FeaturesDto } from "../../submodules/Portfolio-Platform-Dtos/features";
import { Feature } from "../../submodules/Portfolio-Platform-Entities/features.entity";
import FacadeBase from "./facadebase";

@Injectable()
export class FeaturesFacade extends FacadeBase<Feature,FeaturesDto>{
    constructor(private featuresAppService: FeaturesAppService){
       super(featuresAppService);
    }
}