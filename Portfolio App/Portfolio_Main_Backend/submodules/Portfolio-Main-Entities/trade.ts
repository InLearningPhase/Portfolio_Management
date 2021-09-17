import { EntityBase } from "./EntityBase/EntityBase";
import {
  Column,
  Entity,
  Unique,
} from "typeorm";

@Entity("trade")
@Unique(["id"])
export class Trade extends EntityBase {

  @Column({ name: "ticker_symbol" })
  ticker_symbol: string;

  @Column({ name: "company_name" })
  company_name: string;

  @Column({ name: "current_price" })
  current_price: number

  @Column({ name: "trade_type" })
  trade_type: string


}
