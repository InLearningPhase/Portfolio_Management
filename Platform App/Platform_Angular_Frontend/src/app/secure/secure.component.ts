
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AwsCognitoService } from '../services/aws-cognito.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {;

  tokenDetails: any;
  token: any;
  token2:any

  constructor(private awsCognitoService: AwsCognitoService) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('access_token');

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log(this.tokenDetails);
    } else {
      window.location.assign(environment.logout);
    }

  }

}
