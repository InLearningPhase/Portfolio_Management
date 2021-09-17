import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Tenant } from "./tenants.entity";
import { Tenant_User_App } from "./tenant_user_apps.entity";
import { User } from "./users.entity";
@Entity('tenant_users',{"schema": "platform"})
@Unique(["id"])
export class Tenant_User extends EntityBase {
    
  @Column ({ name: "tenant_id" , nullable: false})
  tenant_id?: number;
  
  @Column ({ name: "user_id" , nullable: false})
  user_id?: number;
  
  @Column ({ name: "identity_provider_subscriber_id", nullable: false })
  identity_provider_subscriber_id?: string;
  @ManyToOne(
    (type) => User,
    (users) => users.id,
  )
  @JoinColumn({name: "user_Id"})
  users: User[];
  @ManyToOne(
    (type) => Tenant,
    (tenants) => tenants.id,
  )
  @JoinColumn({name: "tenant_Id"})
  tenants: Tenant[];
  @OneToMany(
    (type) => Tenant_User_App,
    (tenant_user_apps) => tenant_user_apps.tenant_users,
  )
  tenant_user_apps: Tenant_User_App[];
}