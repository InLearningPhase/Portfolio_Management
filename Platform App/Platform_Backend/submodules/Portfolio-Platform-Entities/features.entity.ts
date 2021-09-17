import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { App } from "./apps.entity";
import { Feature_Permission } from "./feature_permissions.entity";
import { Tenant_App_Feature } from "./tenant_app_features.entity";

@Entity('features',{"schema": "platform"})
@Unique(["id"])
export class Feature extends EntityBase {
  
 
    @Column ({ name: "feature_name", nullable: false })
    feature_name?: string;
 
    @Column ({ name: "app_id", nullable: false })
    app_id?: number;
 
    @Column ({ name: "base_feature_id", nullable: true })
    base_feature_id?: number;
 
    @Column ({ name: "feature_description", nullable: false })
    feature_description? : string;
 
    @Column ({ name: "feature_key" , nullable: false})
    feature_key? : string;
 
    @Column ("text",{ name: "operations", nullable: true, array: true })
    operations? :string[];
 
    @Column ({ name: "feature_type" , nullable: false})
    feature_type? : number;
    
    @ManyToOne(
      (type) => App,
      (apps) => apps.id,
    )
    @JoinColumn({name: "app_id"})
    apps: App[];
    @OneToMany(
      (type) => Feature_Permission,
      (feature_permissions) => feature_permissions.features,
    )
    feature_permissions: Feature_Permission[]
    @OneToMany(
      (type) => Feature_Permission,
      (tenant_app_feature) => tenant_app_feature.features,
    )
    tenant_app_features: Tenant_App_Feature[]

}