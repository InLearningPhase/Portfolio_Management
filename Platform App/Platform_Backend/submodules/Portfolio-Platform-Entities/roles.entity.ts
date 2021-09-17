import { Column, Entity, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { App_Role } from "./app_roles.entity";
import { Feature_Permission } from "./feature_permissions.entity";
import { Tenant_User_App_Role } from "./tenant_user_app_roles.entity";

@Entity('roles',{"schema": "platform"})
@Unique(["id"])
export class Role extends EntityBase {
    
    @Column ({ name: "role_name", nullable: false })
    role_name?: string;
 
    @Column ({ name: "role_priviledge" , type: "json", nullable: false})
    role_priviledge?: JSON;
    @OneToMany(
      (type) => Feature_Permission,
      (feature_permissions) => feature_permissions.roles,
    )
    feature_permissions: Feature_Permission[];
    @OneToMany(
      (type) => App_Role,
      (app_roles) => app_roles.roles,
    )
    app_roles: App_Role[];
    @OneToMany(
      (type) => Tenant_User_App_Role,
      (tenant_user_app_roles) => tenant_user_app_roles.roles,
    )
    tenant_user_app_roles: Tenant_User_App_Role[];
}