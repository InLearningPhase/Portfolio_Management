import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllOrderService } from 'src/app/services/allOrder.service';
import { OrderService } from 'src/app/services/order.service';
import { StockService } from 'src/app/services/stock.service';
import { CommonService } from 'src/app/services/common.service';
import { AllOrder, Data, Order, Stock } from 'src/app/interface/interface';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  form: FormGroup;
  data = {} as Data

  ticker_symbol = ""
  is_exist: boolean
  trade = "BUY"

  order: Order = {
    id: 0,
    ticker_symbol: "",
    company_name: "",
    share: 0,
    current_price: 0,
    avg_buy_price: 0,
    gain: 0,
    gain_percent: 0,
    user_id: parseInt(sessionStorage.getItem('user_id'))
  };

  allOrder: AllOrder = {
    id: 0,
    ticker_symbol: "",
    company_name: "",
    share: 0,
    trade_type: "",
    buy_price: 0,
    order_time: "",
    user_id: parseInt(sessionStorage.getItem('user_id'))
  };

  stocks: Stock[] = [];
  samplePrice = 0;

  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService,
    private orderService: OrderService,
    private router: Router,
    private allorderService: AllOrderService,
    private stockService: StockService) { }


  async ngOnInit() {

    // this.samplePrice = 2000

    // setInterval(() => {

    //   this.samplePrice = this.samplePrice + 5
    //   console.log(this.samplePrice)
    //   this.order.current_price = this.samplePrice

    // }, 10000)

    this.data.DataCollection = []
    this.is_exist = false

    await this.setFormDefaultValues()
    await this.getDropdownValues()

  }


  async buyShare() {

    this.order.company_name = this.form.getRawValue().company_name
    this.order.ticker_symbol = this.form.getRawValue().ticker_symbol
    await this.checkCompanyExist()

    if (this.is_exist)
      await this.updateStock()
    else
      await this.addNewStock()


  }


  async addNewStock() {

    this.order.share = this.form.getRawValue().share
    this.order.avg_buy_price = this.form.getRawValue().buy_price
    this.order.gain = (this.order.current_price - this.form.getRawValue().buy_price) * parseInt(this.form.getRawValue().share)
    this.order.gain_percent = (this.order.gain / (this.form.getRawValue().buy_price * parseInt(this.form.getRawValue().share))) * 100

    this.data.DataCollection.push(this.order)
    console.log(this.data)
    await this.orderService.create(this.data).then(() => {
      this.router.navigate(['/dashboard/orders'])
      this.setAllOrder()
    })

  }

  async updateStock() {

    await this.commonService.getSpecificOrderByUserId(this.order.user_id, this.ticker_symbol).then((res: any) => {
      console.log(res.DataCollection[0])
      this.order.id = res.DataCollection[0].id
      this.order.share = parseInt(this.form.getRawValue().share) + res.DataCollection[0].share
      this.order.avg_buy_price = ((res.DataCollection[0].avg_buy_price * res.DataCollection[0].share)
        + (this.form.getRawValue().buy_price * parseInt(this.form.getRawValue().share))) / (parseInt(this.form.getRawValue().share) + res.DataCollection[0].share)
      this.order.gain = (this.order.current_price - this.order.avg_buy_price) * this.order.share
      this.order.gain_percent = ((this.order.gain / (this.order.avg_buy_price * this.order.share)) * 100)
    })

    this.data.DataCollection.push(this.order)
    console.log(this.data)
    await this.orderService.update(this.order.id, this.data).then(() => {
      this.router.navigate(['/dashboard/orders'])
      this.setAllOrder()
    })

  }

  async sellShare() {

    this.trade = "SELL"
    this.order.company_name = this.form.getRawValue().company_name
    this.order.ticker_symbol = this.form.getRawValue().ticker_symbol
    await this.commonService.getOrderCompanyName(this.ticker_symbol).then((res: any) => {
      console.log(res.DataCollection[0])
      this.order.id = res.DataCollection[0].id
      this.order.share = res.DataCollection[0].share - parseInt(this.form.getRawValue().share)
      this.order.avg_buy_price = res.DataCollection[0].avg_buy_price
      this.order.gain = (this.order.current_price - this.order.avg_buy_price) * this.order.share
      this.order.gain_percent = ((this.order.gain / (this.order.avg_buy_price * this.order.share)) * 100)
    })

    this.data.DataCollection.push(this.order)
    console.log(this.data)
    this.orderService.update(this.order.id, this.data).then(() => {
      this.router.navigate(['/dashboard/orders'])
      this.setAllOrder()
    })


  }

  //************************************* Stores data for each type of trade **************************************//

  async setAllOrder() {

    this.allOrder.buy_price = this.form.getRawValue().buy_price
    this.allOrder.order_time = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' })
    this.allOrder.ticker_symbol = this.form.getRawValue().ticker_symbol
    this.allOrder.company_name = this.form.getRawValue().company_name
    this.allOrder.share = this.form.getRawValue().share
    this.allOrder.trade_type = this.trade
    this.data.DataCollection = []

    this.data.DataCollection.push(this.allOrder)
    await this.allorderService.create(this.data)

  }

  //******************************** Checks if a user has already traded in a company ***************************//

  async checkCompanyExist() {
    await this.commonService.getSpecificOrderByUserId(this.order.user_id, this.ticker_symbol).then((res: any) => {
      if (!(res.DataCollection[0] == undefined)) {
        this.is_exist = true
      }
    })
  }

  //**************************************************************************************************************//

  setFormDefaultValues() {
    this.form = this.formBuilder.group({
      ticker_symbol: ["", Validators.required],
      company_name: ["", Validators.required],
      buy_price: ["", Validators.required],
      share: ["", Validators.required]
    });
  }

  async getDropdownValues() {
    await this.stockService.getAllCompanyName().then((res: any) => {
      this.stocks = res.DataCollection
      this.form.patchValue({ ticker_symbol: res.DataCollection[0].ticker_symbol })
    })
  }

  async getStockInfo() {
    this.ticker_symbol = this.form.getRawValue().ticker_symbol
    await this.getStockCurrentPrice(this.ticker_symbol)
    await this.getCurrentCompanyName(this.ticker_symbol)
  }

  //**************************** Fetches current price of stocks from trakinvest's API  ***********************//

  async getStockCurrentPrice(ticker_symbol: string) {
    // await this.commonService.getCurrentPrice(ticker_symbol).then((res: any) => {
    //   console.log(res.content[0])
    //   this.order.current_price = res.content[0].price
    //   this.form.patchValue({ buy_price: this.order.current_price })
    // })
    this.form.patchValue({buy_price: 2000})

  }

  //**************************** Fetches company name based on ticker_symbol  ****************************//

  async getCurrentCompanyName(ticker_symbol: string) {
    await this.commonService.getCompanyName(ticker_symbol).then((res: any) => {
      console.log(res.DataCollection[0].company_name)
      this.form.patchValue({ company_name: res.DataCollection[0].company_name })
    })
  }

}
