import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends RestService {

  endpoint = `${environment.api}/APPS_SERVICE/APPS`
  getEndpoint = `${environment.api}/APPS`
}
