import { EntityBase } from "./EntityBase/EntityBase";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  Unique,
} from "typeorm";
import { User } from "./user";

@Entity("all_order")
@Unique(["id"])
export class AllOrder extends EntityBase {

  @Column({ name: "ticker_symbol" })
  ticker_symbol: string;

  @Column({ name: "company_name"})
  company_name: string;

  @Column({ type: 'real', name: "share"})
  share: string;

  @Column({ name: "trade_type" })
  trade_type: string;

  @Column({ type: 'real',name: "buy_price" })
  buy_price: string;

  @Column({ name: "order_time" })
  order_time: string;

  @Column ({ name: "user_id"})
  user_id?: number;

  @ManyToOne(
    (type) => User,
    (User) => User.id,
  )
  @JoinColumn({name: "user_id"})
  users: User[];

}
