import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { App } from "./apps.entity";
import { Tenant } from "./tenants.entity";
import { Tenant_App_Feature } from "./tenant_app_features.entity";
import { Tenant_User_App } from "./tenant_user_apps.entity";

@Entity('tenant_apps',{"schema": "platform"})
@Unique(["id"])
export class Tenant_App extends EntityBase {
  
  
  @Column ({ name: "tenant_id", nullable: false })
  tenant_id?: number;
  
  @Column ({ name: "app_id" , nullable: false})
  app_id?: number;
  
  @Column ({ name: "connection_string" , nullable: false})
  connection_string?: string;
  
  @Column ({ name: "all_features" , nullable: false})
  all_features : boolean=false;
  @ManyToOne(
    (type) => App,
    (App) => App.id,
  )
  @JoinColumn({name: "app_id"})
  apps: App[];
  @ManyToOne(
    (type) => Tenant,
    (Tenant) => Tenant.id,
  )
  @JoinColumn({name: "tenant_id"})
  tenants: Tenant[];
  @OneToMany(
    (type) => Tenant_App_Feature,
    (tenant_app_features) => tenant_app_features.tenant_apps,
  )
  tenant_app_features: Tenant_App_Feature[];
  @OneToMany(
    (type) => Tenant_User_App,
    (tenant_user_apps) => tenant_user_apps.tenant_apps,
  )
  tenant_user_apps: Tenant_User_App[];
}