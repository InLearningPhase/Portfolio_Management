import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CommonService {

    constructor(protected http: HttpClient) { }

    getCurrentPrice(ticker_symbol: string) {

        return this.http.get('http://pie-api-prod.trakinvest.com/pie/api/stocks/prices?q=nse:' + ticker_symbol).toPromise()

    }

    getCompanyName(ticker_symbol: string) {

        return this.http.get(`${environment.api}/stocks/stock/${ticker_symbol}`).toPromise()

    }

    getOrderCompanyName(ticker_symbol: string) {

        return this.http.get(`${environment.api}/orders/order/${ticker_symbol}`).toPromise()

    }

    getUserBySub(sub: string) {

        return this.http.get(`${environment.api}/users/unique/${sub}`).toPromise()

    }

    getOrderByUserId(id: number) {

        return this.http.get(`${environment.api}/orders/data/${id}`).toPromise()

    }

    getAllOrdersByUserId(id: number) {

        return this.http.get(`${environment.api}/allOrders/data/${id}`).toPromise()

    }

    getSpecificOrderByUserId(id: number, ticker_symbol:string) {

        return this.http.get(`${environment.api}/orders/data/${ticker_symbol}/${id}`).toPromise()

    }

}