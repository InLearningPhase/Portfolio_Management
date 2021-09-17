import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantUserService } from 'src/app/services/tenantUser.service';

@Component({
  selector: 'app-tenant-user',
  templateUrl: './tenant-user.component.html',
  styleUrls: ['./tenant-user.component.css']
})
export class TenantUserComponent implements OnInit {

  tenantUser: TenantUserComponent[] = [];
  data = {} as Data

  constructor(private tenantUserService: TenantUserService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.tenantUserService.all().then(
      (res: any) => {
        this.tenantUser = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.tenantUserService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.tenantUserService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/tenantUser']));

  }

}
