import { Column, Entity, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Feature_Permission } from "./feature_permissions.entity";
import { Tenant } from "./tenants.entity";
import { Tenant_User } from "./tenant_users.entity";

@Entity('users',{"schema": "platform"})
@Unique(["id"])
export class User extends EntityBase {
    
  @Column ({ name: "login_name", nullable: false })
  login_name?: string;
  
  @Column ({ name: "birth_date" , nullable: true})
  birth_date?: Date;
  
  @Column ({ name: "date_of_joining" , nullable: true})
  date_of_joining?: Date;
    
    @Column ({ name: "first_name", nullable: false })
    first_name?: string;
  
    @Column ({ name: "last_name" , nullable: true})
    last_name?: string;
  
    @Column ({ name: "email" , nullable: false})
    email?: string;
  
    @Column ({ name: "phone" , nullable: false})
    phone?: number;
  
    @Column ({ name: "marital_status" , nullable: false})
    marital_status?: string;

    @OneToMany(
      (type) => Tenant_User,
      (tenant_users) => tenant_users.users,
    )
    tenant_users: Tenant_User[];
    @OneToMany(
      (type) => Feature_Permission,
      (feature_permissions) => feature_permissions.users,
    )
    feature_permissions: Feature_Permission[];
   
}