import { EntityBase } from "./EntityBase/EntityBase";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  Unique,
} from "typeorm";
import { User } from "./user";

@Entity("order")
@Unique(["id"])
export class Order extends EntityBase {

  @Column({ name: "ticker_symbol" })
  ticker_symbol: string;

  @Column({ name: "company_name" })
  company_name: string;

  @Column({ type: 'real', name: "share" })
  share: string;

  @Column({ type: 'real',name: "current_price" })
  current_price: string;

  @Column({ type: 'real',name: "avg_buy_price" })
  avg_buy_price: string;

  @Column({ type: 'real', name: "gain" })
  gain: string;

  @Column({type: 'real',  name: "gain_percent" })
  gain_percent: string;

  @Column ({ name: "user_id" })
  user_id?: number;

  @ManyToOne(
    (type) => User,
    (User) => User.id,
  )
  @JoinColumn({name: "user_id"})
  users: User[];


}
