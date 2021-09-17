import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Role } from "./roles.entity";
import { Tenant_User_App } from "./tenant_user_apps.entity";
@Entity('tenant_user_app_roles',{"schema": "platform"})
@Unique(["id"])
export class Tenant_User_App_Role extends EntityBase {
  
  @Column ({ name: "tenant_user_app_id", nullable: false })
  tenant_user_app_id?: number;
 
  @Column ({ name: "role_id" , nullable: false})
  role_id?: number;
  @ManyToOne(
    (type) => Role,
    (roles) => roles.id,
  )
  @JoinColumn({name: "role_id"})
  roles: Role[];
  @ManyToOne(
    (type) => Tenant_User_App,
    (tenant_user_apps) => tenant_user_apps.id,
  )
  @JoinColumn({name: "tenant_user_app_id"})
  tenant_user_apps: Tenant_User_App[];

}