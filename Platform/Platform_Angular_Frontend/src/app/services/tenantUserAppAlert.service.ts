import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantUserAppAlertService extends RestService {

  endpoint = `${environment.api}/TENANT_USER_APP_ALERTS_SERVICE/TENANT_USER_APP_ALERTS`
  getEndpoint = `${environment.api}/TENANT_USER_APP_ALERTS`
}
