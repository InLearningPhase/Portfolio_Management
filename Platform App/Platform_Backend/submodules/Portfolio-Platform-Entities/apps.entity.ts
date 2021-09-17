
import { Column, Entity, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { App_Message } from "./app_messages.entity";
import { App_Role } from "./app_roles.entity";
import { Feature } from "./features.entity";
import { Tenant_App } from "./tenant_apps.entity";

@Entity('apps',{"schema": "platform"})
@Unique(["id"])
export class App extends EntityBase {
    
  @Column ({ name: "app_name", nullable: false })
    app_name?: string;
    
  @Column({ name: "app_description", nullable: true })
    app_description?: string;


    @OneToMany(
      (type) => App_Message,
      (app_message) => app_message.apps,
    )
    app_message: App_Message[];
    @OneToMany(
      (type) => Feature,
      (features) => features.apps,
    )
    features: Feature[];
    @OneToMany(
      (type) => App_Role,
      (app_roles) => app_roles.apps,
    )
    app_roles: App_Role[];
    @OneToMany(
      (type) => Tenant_App,
      (tenant_apps) => tenant_apps.apps,
    )
    tenant_apps: Tenant_App[];
}