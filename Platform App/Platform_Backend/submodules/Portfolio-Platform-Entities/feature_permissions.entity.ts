import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Feature } from "./features.entity";
import { Role } from "./roles.entity";
import { User } from "./users.entity";

@Entity('feature_permissions',{"schema": "platform"})

export class Feature_Permission extends EntityBase {
    
    @Column ({ name: "feature_id" , nullable: false})
    feature_id?: number;
 
    @Column ({ name: "operation_permitted", type: "json", nullable: false })
    operation_permitted?: JSON;
 
    @Column ({ name: "role_id", nullable: false })
    role_id?: number;
 
    @Column ({ name: "user_id", nullable: true })
    user_id?: number;
 
    @Column ({ name: "role_feature_security", type: "json" , nullable: false})
    role_feature_security? : JSON;
    @ManyToOne(
      (type) => Feature,
      (features) => features.id,
    )
    @JoinColumn({name: "feature_id"})
    features: Feature[];
    @ManyToOne(
      (type) => Role,
      (roles) => roles.id,
    )
    @JoinColumn({name: "role_id"})
    roles: Role[];
    @ManyToOne(
      (type) => User,
      (users) => users.id,
    )
    @JoinColumn({name: "user_id"})
    users: User[];
}