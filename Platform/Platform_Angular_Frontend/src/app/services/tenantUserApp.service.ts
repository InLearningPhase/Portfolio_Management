import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantUserAppService extends RestService {

  endpoint = `${environment.api}/TENANT_USER_APPS_SERVICE/TENANT_USER_APP`
  getEndpoint = `${environment.api}/TENANT_USER_APP`
}
