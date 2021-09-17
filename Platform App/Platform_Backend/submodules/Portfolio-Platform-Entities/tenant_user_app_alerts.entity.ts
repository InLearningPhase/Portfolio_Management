import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Tenant_User_App } from "./tenant_user_apps.entity";

@Entity('tenant_user_app_alerts',{"schema": "platform"})
@Unique(["id"])
export class Tenant_User_App_Alert extends EntityBase {
    
  @Column ({ name: "alert_type" , nullable: false})
  alert_type?: string;
  
  @Column ({ name: "alert_name" , nullable: false})
  alert_name? : string;
  
  @Column ({ name: "alert_desc", nullable: true})
  alert_desc?: string;
  
  @Column ({ name: "from_date_time", nullable: false })
  from_date_time?: Date;
  
  @Column ({ name: "alert_duration_type" , nullable: true})
  alert_duration_type?: string;
  
  @Column ({ name: "subscription_date" , nullable: false})
  subscription_date?: Date;
  
  @Column ({ name: "has_unsubscribed" , nullable: false})
  has_unsubscribed?: boolean;
  
  @Column ({ name: "tenant_user_app_id" , nullable: false})
  tenant_user_app_id?: number;
  
  @Column ({ name: "tenant_user_id" , nullable: false})
  tenant_user_id?: number;
  
  @Column ({ name: "user_id" , nullable: false})
  user_id?: number;
  @ManyToOne(
    (type) => Tenant_User_App,
    (tenant_user_apps) => tenant_user_apps.id
  )
  @JoinColumn({name: "tenant_user_app_id"})
  tenant_user_apps: Tenant_User_App[];

}