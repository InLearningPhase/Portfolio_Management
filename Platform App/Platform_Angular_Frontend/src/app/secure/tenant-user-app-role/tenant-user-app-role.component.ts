import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantUserAppRoleService } from 'src/app/services/tenantUserAppRole.service';

@Component({
  selector: 'app-tenant-user-app-role',
  templateUrl: './tenant-user-app-role.component.html',
  styleUrls: ['./tenant-user-app-role.component.css']
})
export class TenantUserAppRoleComponent implements OnInit {

  tenantUserAppRole: TenantUserAppRoleComponent[] = [];
  data = {} as Data

  constructor(private tenantUserAppRoleService: TenantUserAppRoleService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.tenantUserAppRoleService.all().then(
      (res: any) => {
        this.tenantUserAppRole = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.tenantUserAppRoleService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.tenantUserAppRoleService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/tenantUserAppRole']));

  }

}
