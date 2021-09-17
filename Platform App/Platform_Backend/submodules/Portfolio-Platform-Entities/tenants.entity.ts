import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Client } from "./clients.entity";
import { Tenant_App } from "./tenant_apps.entity";
import { Tenant_User } from "./tenant_users.entity";
@Entity('tenants',{"schema": "platform"})
@Unique(["id"])
export class Tenant extends EntityBase {
    
    
  @Column ({ name: "tenant_name", nullable: false })
  tenant_name?: string;
  
  @Column ({ name: "description", nullable: true })
  description?: string;
  
  @Column ({ name: "alias", nullable: true })
  alias?: string;
  
  @Column ({ name: "published_from" , nullable: false})
  published_from?: Date;
  
  @Column ({ name: "published_till" , nullable: false})
  published_till?: Date;
  
  @Column ({ name: "is_complete" , nullable: false})
  is_complete?: boolean;
  
  @Column ({ name: "site_image_url_path" , nullable: true})
  site_image_url_path?: string;
  
  @Column ({ name: "status_id", nullable: false })
  status_id?: number;
  
  @Column ({ name: "client_id" , nullable: false})
  client_id?: number;
  
  @Column ({ name: "identity_providers_details" , type: "json", nullable: false})
  identity_providers_details?: JSON;
  
  @Column ({ name: "tenant_admin_email" , nullable: false})
  tenant_admin_email?: string;

  @OneToMany(
    (type) => Tenant_User,
    (tenant_users) => tenant_users.tenants,
  )
  tenant_users: Tenant_User[];
  @OneToMany(
    (type) => Tenant_App,
    (tenant_apps) => tenant_apps.tenants,
  )
  tenant_apps: Tenant_App[];
  
  @ManyToOne(
    (type) => Client,
    (ClientsEntity) => ClientsEntity.id,
  )
  @JoinColumn({name: "client_Id"})
  clients: Client;
}