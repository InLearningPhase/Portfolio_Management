import { Column, Entity, ManyToOne, OneToMany, Unique, JoinColumn } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { State } from "./states.entity";

@Entity("countries",{"schema": "framework"})
@Unique(['id'])
export class Country extends EntityBase {
  @Column ({ name: "country_name", nullable: false })
  country_name?: string;
    
  @Column({ name: "country_code", nullable: false })
  country_code?: string; 

  @Column({ name: "country_tel_code", nullable: false })
  country_tel_code?: string;
 
  @Column({ name: "currency", nullable: false })
  currency?: string;

  
  @OneToMany(
    () => State,
    (states) => states.countries,
  )
  states: State[]

  
}