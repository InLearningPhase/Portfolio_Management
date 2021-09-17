import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantAppService extends RestService {

  endpoint = `${environment.api}/TENANT_APPS_SERVICE/TENANT_APPS`
  getEndpoint = `${environment.api}/TENANT_APPS`
}
