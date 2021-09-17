import { Component, OnInit } from '@angular/core';
import { AllOrder, Data } from 'src/app/interface/interface';
import { AllOrderService } from 'src/app/services/allOrder.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  allorder: AllOrder[] = [];
  data = {} as Data

  user_id: number
  sub: string;

  constructor(private allOrderService: AllOrderService,
    private commonService: CommonService) { }

  async ngOnInit() {

    this.sub = localStorage.getItem("sub")
    await this.getCurrentUserId(this.sub)
    await this.load(this.user_id)

  }

  //********************************* Fetches current user based on sub from access_token **************************//

  async getCurrentUserId(sub: string) {
    await this.commonService.getUserBySub(sub).then((res: any) => {
      this.user_id = res.DataCollection[0].id
      sessionStorage.setItem('user_id', this.user_id.toString())
    })
  }

  async load(id: number) {
    await this.commonService.getAllOrdersByUserId(id).then(
      (res: any) => {
        this.allorder = res.DataCollection;
      }
    );
  }

}
