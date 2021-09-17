import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiService {

  endpoint = `${environment.api}/ORDERS_SERVICE/ORDERS`
  getEndpoint = `${environment.api}/ORDERS`
}
