import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends RestService {

  endpoint = `${environment.api}/CLIENTS_SERVICE/CLIENTS`
  getEndpoint = `${environment.api}/CLIENTS`
}
