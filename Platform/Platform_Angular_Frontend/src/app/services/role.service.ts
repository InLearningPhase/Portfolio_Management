import { User } from '../interfaces/interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends RestService {

  endpoint = `${environment.api}/ROLES_SERVICE/ROLES`
  getEndpoint = `${environment.api}/ROLES`

}
