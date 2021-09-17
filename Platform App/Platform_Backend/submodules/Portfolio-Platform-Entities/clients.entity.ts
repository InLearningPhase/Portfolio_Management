import { Column, Entity, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Tenant } from "./tenants.entity";

@Entity('clients',{"schema": "platform"})
@Unique(["id"])
export class Client extends EntityBase {
 
    @Column ({ name: "address_id" , nullable: false})
    address_id?: number;
 
    @Column ({ name: "start_date" , nullable: false})
    start_date?: Date;
 
    @Column ({ name: "expiry_date" , nullable: false})
    expiry_date?: Date ;
 
    @Column ({ name: "client_key" , nullable: false})
    client_key?: string;
 
    @Column ({ name: "client_name" , nullable: false})
    client_name?: string;
 
    @Column ({ name: "description" , nullable: false})
    description?: string;
 
    @Column ({ name: "contact_id" , nullable: false})
    contact_id?: number;
    @OneToMany(
      (type) => Tenant,
      TenantsEntity => TenantsEntity.clients,
    )
    tenants: Tenant[]

}