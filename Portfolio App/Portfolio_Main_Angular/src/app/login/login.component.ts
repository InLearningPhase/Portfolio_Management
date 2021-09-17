import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http:HttpClient,
    private authService:AuthService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: '',
      password: ''
    });

  }

  register():void{
    window.location.href = 'https://portfolio.auth.ap-south-1.amazoncognito.com/signup?client_id=44gu952el8id5n62fsiv0d5pt7&response_type=code&scope=email+openid&redirect_uri=http://localhost:4200/login'
  }

  login(): void {
    this.authService.login(this.form.getRawValue())
      .subscribe((res:any) =>{
        this.router.navigate(['callback'])
        sessionStorage.setItem('access_token',res.accessToken)
        localStorage.setItem("email", res.idToken.email)
        localStorage.setItem("sub", res.idToken.sub)
      });
  } 

}
