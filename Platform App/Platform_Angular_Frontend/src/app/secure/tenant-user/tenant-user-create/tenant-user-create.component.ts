import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantUserService } from 'src/app/services/tenantUser.service';

@Component({
  selector: 'app-tenant-user-create',
  templateUrl: './tenant-user-create.component.html',
  styleUrls: ['./tenant-user-create.component.css']
})
export class TenantUserCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private tenantUserService: TenantUserService,
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
      tenant_id: 0,
      user_id: 0,
      identity_provider_subscriber_id: "",
    });

    if (this.id) {

      this.tenantUserService.get(this.id).then(
        (tenantUser:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            tenant_id: tenantUser.DataCollection[0].tenant_id,
            user_id: tenantUser.DataCollection[0].user_id,
            identity_provider_subscriber_id: tenantUser.DataCollection[0].identity_providers_subscriber_id,
            
          });
        }
      );

    }

  }

  addTenantUser(): void {
   this.data.DataCollection.push(this.form.getRawValue())
    this.tenantUserService.create(this.data).then(
      () => this.router.navigate(['/secure/tenantUser'])
    );
  }

  updateTenantUser() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.tenantUserService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/tenantUser']));

  }

}
