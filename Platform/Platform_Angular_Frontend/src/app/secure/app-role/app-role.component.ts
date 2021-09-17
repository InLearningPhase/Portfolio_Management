import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { AppRoleService } from 'src/app/services/appRole.service';

@Component({
  selector: 'app-app-role',
  templateUrl: './app-role.component.html',
  styleUrls: ['./app-role.component.css']
})
export class AppRoleComponent implements OnInit {

  appRole: AppRoleComponent[] = [];
  data = {} as Data

  constructor(private appRoleService: AppRoleService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.appRoleService.all().then(
      (res: any) => {
        this.appRole = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.appRoleService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.appRoleService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/appRole']));


  }

}
