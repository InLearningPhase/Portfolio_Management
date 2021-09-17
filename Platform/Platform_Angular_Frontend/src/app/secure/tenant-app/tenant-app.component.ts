import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantAppService } from 'src/app/services/tenantApp.service';

@Component({
  selector: 'app-tenant-app',
  templateUrl: './tenant-app.component.html',
  styleUrls: ['./tenant-app.component.css']
})
export class TenantAppComponent implements OnInit {

  tenantApp: TenantAppComponent[] = [];
  data = {} as Data

  constructor(private tenantAppService: TenantAppService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.tenantAppService.all().then(
      (res: any) => {
        this.tenantApp = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.tenantAppService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.tenantAppService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/tenantApp']));

  }

}
