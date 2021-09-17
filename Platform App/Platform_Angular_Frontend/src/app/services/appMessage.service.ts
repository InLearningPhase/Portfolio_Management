import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService extends RestService {

  endpoint = `${environment.api}/APP_MESSAGES_SERVICE/APP_MESSAGES`
  getEndpoint = `${environment.api}/APP_MESSAGES`
}
