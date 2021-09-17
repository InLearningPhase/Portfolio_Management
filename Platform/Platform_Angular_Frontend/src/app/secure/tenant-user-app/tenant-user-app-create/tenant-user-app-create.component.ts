import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantUserAppService } from 'src/app/services/tenantUserApp.service';

@Component({
  selector: 'app-tenant-user-app-create',
  templateUrl: './tenant-user-app-create.component.html',
  styleUrls: ['./tenant-user-app-create.component.css']
})
export class TenantUserAppCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private tenantUserAppService: TenantUserAppService,
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
      tenant_user_id: 0,
      tenant_app_id: 0,
      tenant_user_app_permissions: "",
    });

    if (this.id) {

      this.tenantUserAppService.get(this.id).then(
        (tenantUserApp:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            tenant_user_id: tenantUserApp.DataCollection[0].tenant_user_id,
            tenant_app_id: tenantUserApp.DataCollection[0].tenant_app_id,
            tenant_user_app_permissions: tenantUserApp.DataCollection[0].tenant_user_app_permissions,
            
          });
        }
      );

    }

  }

  addTenantUserApp(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.tenantUserAppService.create(this.data).then(
      () => this.router.navigate(['/secure/tenantUserApp'])
    );
  }

  updateTenantUserApp() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.tenantUserAppService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/tenantUserApp']));

  }

}
