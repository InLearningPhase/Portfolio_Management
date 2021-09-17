import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Feature_PermissionsDto } from "../../submodules/Portfolio-Platform-Dtos/feature_permissions";
import { Feature_Permission } from "../../submodules/Portfolio-Platform-Entities/feature_permissions.entity";
import AppService from "../../submodules/Portfolio-Platform-Framework/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Portfolio-Platform-Mappings/feature_permissions.mapper')

@Injectable()
export default class Feature_PermissionsAppService extends AppService<Feature_Permission,Feature_PermissionsDto>{
    constructor(@InjectRepository(Feature_Permission) private readonly feature_permissionsRepository: Repository<Feature_Permission>,public http:HttpService) {
        super(http,feature_permissionsRepository,Feature_Permission,Feature_Permission,Feature_PermissionsDto,dto.feature_permissionsentityJson, dto.feature_permissionsdtoJson,dto.feature_permissionsentityToDtoJson, dto.feature_permissionsdtoToEntityJson);
             
    }

} 