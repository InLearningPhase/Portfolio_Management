import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StockService  {

    constructor(protected http: HttpClient) { }

    getAllCompanyName() {

        return this.http.get(`${environment.api}/stocks`).toPromise()

    }
}