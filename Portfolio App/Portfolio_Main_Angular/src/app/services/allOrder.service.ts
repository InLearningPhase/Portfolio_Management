import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AllOrderService extends ApiService {

  endpoint = `${environment.api}/ALLORDERS_SERVICE/ALLORDERS`
  getEndpoint = `${environment.api}/ALLORDERS`
}
