import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantUserAppService } from 'src/app/services/tenantUserApp.service';

@Component({
  selector: 'app-tenant-user-app',
  templateUrl: './tenant-user-app.component.html',
  styleUrls: ['./tenant-user-app.component.css']
})
export class TenantUserAppComponent implements OnInit {

  tenantUserApp: TenantUserAppComponent[] = [];
  data = {} as Data

  constructor(private tenantUserAppService: TenantUserAppService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.tenantUserAppService.all().then(
      (res: any) => {
        this.tenantUserApp = res.DataCollection;
      }
    );
  }

  async delete(id: number)  {

    await this.tenantUserAppService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.tenantUserAppService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/tenantUserApp']));

  }

}
