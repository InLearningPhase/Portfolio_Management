
import { DtoBase } from "./DtoBase/DtoBase";

export class tradeDto extends DtoBase {
    constructor() {
      super();
     
    }
   
    ticker_symbol?: string;
    company_name?: string;
    current_price?: number;
    trade_type?: string;
    
  }