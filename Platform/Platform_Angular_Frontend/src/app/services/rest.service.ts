import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract get endpoint(): string;
  abstract get getEndpoint(): string;
  request_guid: string;
  socket_id: string;

  constructor(protected http: HttpClient) {
  }

  all() {
    return this.http.get(`${this.getEndpoint}`).toPromise();
  }

  create(data:any) {
    data.SocketId = sessionStorage.getItem('socket_id')
    data.RequestGuid = this.request_guid
    return this.http.post(`${this.endpoint}`, data).toPromise();
  }

  get(id: number) {
    return this.http.get(`${this.getEndpoint}/${id}`).toPromise();
  }

  update(id: number, data:any){
    data.SocketId = sessionStorage.getItem('socket_id')
    data.RequestGuid = this.request_guid
    return this.http.put(`${this.endpoint}/${id}`, data).toPromise();
  }

  delete(id: number, data:any) {
    data.SocketId = sessionStorage.getItem('socket_id')
    data.RequestGuid = this.request_guid
    return this.http.request<any>('DELETE', `${this.endpoint}/${id}`, {body: data} ).toPromise();
  }

}