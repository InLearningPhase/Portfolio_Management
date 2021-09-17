import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  endpoint = `${environment.api}/USERS_SERVICE/USERS`
  getEndpoint = `${environment.api}/USERS`
}
