export interface Data {
    DataCollection: Array<any>
}

export interface User {
    email: string
    sub: string
}

export interface AllOrder {
    id: number;
    ticker_symbol: string;
    company_name: string;
    share: number;
    trade_type: string
    buy_price: number;
    order_time: string;
    user_id: number;
}

export interface Order {
    id: number;
    ticker_symbol: string;
    company_name: string;
    share: number;
    current_price: number;
    avg_buy_price: number;
    gain: number;
    gain_percent: number;
    user_id: number;
}

export interface Stock {
    id: number;
    ticker_symbol: string;
    company_name: string;
  }