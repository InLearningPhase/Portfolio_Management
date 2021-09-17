import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AppRoleService extends RestService {

  endpoint = `${environment.api}/APP_ROLES_SERVICE/APP_ROLES`
  getEndpoint = `${environment.api}/APP_ROLES`
}
