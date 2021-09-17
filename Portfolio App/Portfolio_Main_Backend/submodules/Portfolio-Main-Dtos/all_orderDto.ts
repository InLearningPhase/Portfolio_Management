
import { DtoBase } from "./DtoBase/DtoBase";

export class allOrderDto extends DtoBase {
    constructor() {
      super();
     
    }
   
    ticker_symbol?: string;
    company_name?: string;
    share?: number;
    trade_type?: string;
    buy_price?: number;
    order_time?: string;
    user_id?: number;
    
  }