import { EntityBase } from "./EntityBase/EntityBase";
import {
  Column,
  Entity,
  Unique,
} from "typeorm";

@Entity("stock")
@Unique(["id"])
export class Stock extends EntityBase {

  @Column({ name: "ticker_symbol" })
  ticker_symbol: string;

  @Column({ name: "company_name" })
  company_name: string;

}
