import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantUserAppRoleService } from 'src/app/services/tenantUserAppRole.service';

@Component({
  selector: 'app-tenant-user-app-role-create',
  templateUrl: './tenant-user-app-role-create.component.html',
  styleUrls: ['./tenant-user-app-role-create.component.css']
})
export class TenantUserAppRoleCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private tenantUserAppRoleService: TenantUserAppRoleService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.data.DataCollection = []
    this.id = parseInt(this.route.snapshot.params.id);

    this.form = this.formBuilder.group({
      "modified_by": "1",
      "created_by": "1",
      "creation_date": new Date(),
      "modified_date": new Date(),
      "rowversion": "1",
      tenant_user_app_id: 0,
      role_id: 0
    });

    if (this.id) {

      this.tenantUserAppRoleService.get(this.id).then(
        (tenantUserAppRole:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            tenant_user_app_id: tenantUserAppRole.DataCollection[0].tenant_user_app_id,
            role_id: tenantUserAppRole.DataCollection[0].role_id
            
          });
        }
      );

    }

  }

  addTenantUserApp(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.tenantUserAppRoleService.create(this.data).then(
      () => this.router.navigate(['/secure/tenantUserAppRole'])
    );
  }

  updateTenantUserApp() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.tenantUserAppRoleService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/tenantUserAppRole']));
  }

}
