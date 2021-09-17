import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data, Order } from 'src/app/interface/interface';
import { CommonService } from 'src/app/services/common.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order[] = [{
    id: 0,
    ticker_symbol: "",
    company_name: "",
    share: 0,
    current_price: 0,
    avg_buy_price: 0,
    gain: 0,
    gain_percent: 0,
    user_id: 0
  }]

  data = {} as Data
  user_id: number
  sub: string;

  constructor(private orderService: OrderService,
    private router: Router, private commonService: CommonService,
    private userService: UserService) { }

  async ngOnInit() {
    this.data.DataCollection = []
    this.sub = localStorage.getItem("sub")
    await this.getCurrentUserId(this.sub)
    console.log(this.user_id)
    await this.load(this.user_id)
    this.updateData()
  }

  //*********************** Fetches user based on subject form access_token  **************************//

  async getCurrentUserId(sub: string) {
    await this.commonService.getUserBySub(sub).then((res: any) => {
      this.user_id = res.DataCollection[0].id
      sessionStorage.setItem('user_id', this.user_id.toString())
    })
  }

  async load(id: number) {
    console.log(id)
    await this.commonService.getOrderByUserId(id).then(
      (res: any) => {
        this.order = res.DataCollection;
        console.log("orders: ", res.DataCollection)
      }
    );
  }

  //******************** Automatically updates data every 60 seconds ************************//

  async updateData() {

    if (this.order != undefined) {
      console.log("inside if")
      setInterval(async () => {

        if (this.order != undefined) {
          for (let i = 0; i < this.order.length; i++) {

            await this.commonService.getCurrentPrice(this.order[i].ticker_symbol).then((res: any) => {
              this.order[i].current_price = res.content[0].price
              console.log(res.content[0].price)
            })

            this.order[i].gain = (this.order[i].current_price - this.order[i].avg_buy_price) * this.order[i].share
            this.order[i].gain_percent = (this.order[i].gain / (this.order[i].avg_buy_price * this.order[i].share)) * 100
            this.data.DataCollection.push(this.order[i])
            this.orderService.update(this.order[i].id, this.data)

          }
        }

      }, 60000)
    }
  }

}
