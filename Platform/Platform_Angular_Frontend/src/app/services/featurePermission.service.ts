import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturePermissionService extends RestService {

  endpoint = `${environment.api}/FEATURE_PERMISSIONS_SERVICE/FEATURE_PERMISSIONS`
  getEndpoint = `${environment.api}/FEATURE_PERMISSIONS`
}
