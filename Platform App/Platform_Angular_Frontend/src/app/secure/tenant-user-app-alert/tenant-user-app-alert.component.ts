import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantUserAppAlertService } from 'src/app/services/tenantUserAppAlert.service';

@Component({
  selector: 'app-tenant-user-app-alert',
  templateUrl: './tenant-user-app-alert.component.html',
  styleUrls: ['./tenant-user-app-alert.component.css']
})
export class TenantUserAppAlertComponent implements OnInit {

  tenantUserAppAlert: TenantUserAppAlertComponent[] = [];
  data = {} as Data

  constructor(private tenantUserAppAlertService: TenantUserAppAlertService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.tenantUserAppAlertService.all().then(
      (res: any) => {
        this.tenantUserAppAlert = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.tenantUserAppAlertService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.tenantUserAppAlertService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/tenantUserAppAlert']));

  }

}
