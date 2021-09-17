import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService extends RestService {

  endpoint = `${environment.api}/FEATURES_SERVICE/FEATURES`
  getEndpoint = `${environment.api}/FEATURES`
}
