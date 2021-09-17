
import { User } from '../../interfaces/interface';
import { Component, Input, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: string;

  constructor(private router: Router) { }

  ngOnInit() {

    this.user = localStorage.getItem('email')

  }

  logout(): void {

    localStorage.removeItem('access_token')
    localStorage.removeItem("email")
    localStorage.removeItem("sub")
    window.location.assign(environment.logout);
  }

}
