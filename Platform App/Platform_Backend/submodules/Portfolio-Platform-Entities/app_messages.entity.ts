import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { EntityBase } from "./EntityBase/entitybase";
import { App } from "./apps.entity";

@Entity('app_messages',{"schema": "platform"})
@Unique(['id'])
export class App_Message extends EntityBase {
  @Column ({ name: "user_id", nullable: false })
  user_id?: number;
    
  @Column({ name: "tenant_id", nullable: false })
  tenant_id?: number;
  

  @ManyToOne(
    (type) => App,
    (apps) => apps.id,
  )
  @JoinColumn({name: "app_id"})
  apps: App[];
 

  @Column({ name: "app_id" })
    app_id?: number;
  
  @Column({ name: "is_notification" })
    is_notification?: boolean;
  
  @Column({ name: "subject" })
    subject?: string;

  @Column({ name: "message_body" })
    message_body?: string;
  
  @Column({ name: "is_read" })
    is_read?: boolean;
}