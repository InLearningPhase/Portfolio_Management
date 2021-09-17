
import { DtoBase } from "./DtoBase/DtoBase";

export class orderDto extends DtoBase {
    constructor() {
      super();
     
    }
   
    ticker_symbol?: string;
    company_name?: string;
    share?: number;
    current_price: number
    avg_buy_price?: number;
    gain?: number;
    gain_percent?: number;
    user_id?: number
    
  }