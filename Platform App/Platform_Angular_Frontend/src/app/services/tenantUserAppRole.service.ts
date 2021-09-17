import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantUserAppRoleService extends RestService {

  endpoint = `${environment.api}/TENANT_USER_APP_ROLES_SERVICE/TENANT_USER_APP_ROLES`
  getEndpoint = `${environment.api}/TENANT_USER_APP_ROLES`
}
