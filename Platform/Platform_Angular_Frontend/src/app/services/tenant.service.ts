import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantService extends RestService {

  endpoint = `${environment.api}/TENANTS_SERVICE/TENANTS`
  getEndpoint = `${environment.api}/TENANTS`
}
