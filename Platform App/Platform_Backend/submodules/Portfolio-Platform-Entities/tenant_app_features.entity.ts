import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Feature } from "./features.entity";
import { Tenant_App } from "./tenant_apps.entity";

@Entity('tenant_app_features',{"schema": "platform"})
@Unique(["id"])
export class Tenant_App_Feature extends EntityBase {
  
  @Column ({ name: "tenant_app_id" , nullable: false})
  tenant_app_id?: number;
 
  @Column ({ name: "feature_id", nullable: false })
  feature_id?: number;
  @ManyToOne(
    (type) => Feature,
    (features) => features.id,
  )
  @JoinColumn({name: "tenant_app_id"})
  features: Feature[];
  @ManyToOne(
    (type) => Feature,
    (tenant_apps) => tenant_apps.id,
  )
  @JoinColumn({name: "feature_id"})
  tenant_apps: Tenant_App[];
}