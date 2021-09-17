import { EntityBase } from "./EntityBase/EntityBase";
import {
  Column,
  Entity,
  OneToMany,
  Unique,
} from "typeorm";
import { Order } from "./order";
import { AllOrder } from "./all_order";

@Entity("user")
@Unique(["id"])
export class User extends EntityBase {

  @Column({ name: "email" })
  email: string;

  @Column({ name: "sub" })
  sub: string;

  @OneToMany(
    (type) => Order,
    Order => Order.users,
  )
  orders: Order[]

  @OneToMany(
    (type) => AllOrder,
    AllOrder => AllOrder.users,
  )
  allorders: AllOrder[]

}
