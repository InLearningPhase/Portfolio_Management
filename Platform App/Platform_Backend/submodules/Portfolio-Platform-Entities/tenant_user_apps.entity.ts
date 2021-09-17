import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Tenant_App } from "./tenant_apps.entity";
import { Tenant_User } from "./tenant_users.entity";
import { Tenant_User_App_Alert } from "./tenant_user_app_alerts.entity";
import { Tenant_User_App_Role } from "./tenant_user_app_roles.entity";
@Entity('tenant_user_apps',{"schema": "platform"})
@Unique(["id"])
export class Tenant_User_App extends EntityBase {
  
  @Column ({ name: "tenant_user_id" , nullable: false})
  tenant_user_id?: number;
 
  @Column ({ name: "tenant_app_id", nullable: false })
  tenant_app_id?: number;
 
  @Column ({ name: "tenant_user_app_permissions", nullable: false })
  tenant_user_app_permissions?: string;
  @ManyToOne(
    (type) => Tenant_App,
    (tenant_apps) => tenant_apps.id,
  )
  @JoinColumn({name: "tenant_app_id"})
  tenant_apps: Tenant_App[];
  @ManyToOne(
    (type) => Tenant_User,
    (tenant_users) => tenant_users.id,
  )
  @JoinColumn({name: "tenant_user_id"})
  tenant_users: Tenant_User[];
  @OneToMany(
    (type) => Tenant_User_App_Alert,
    (tenant_user_app_alerts) => tenant_user_app_alerts.tenant_user_apps,
  )
  tenant_user_app_alert: Tenant_User_App_Alert[];
  @OneToMany(
    (type) => Tenant_User_App_Role,
    (tenant_user_app_roles) => tenant_user_app_roles.tenant_user_apps,
  )
  tenant_user_app_roles: Tenant_User_App_Role[];

}