import { TenantService } from '../../../services/tenant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-tenent-create',
  templateUrl: './tenant-create.component.html',
  styleUrls: ['./tenant-create.component.css']
})
export class TenantCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private tenantService: TenantService,
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
      tenant_name: "",
      description: '',
      alias: '',
      published_from: "",
      published_till: "",
      is_complete: "",
      site_image_url_path: 0,
      status_id: "",
      client_Id: "",
      identity_providers_details: {},
      tenant_admin_email: ""
    });

    if (this.id) {

      this.tenantService.get(this.id).then(
        (tenant: any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            tenant_name: tenant.DataCollection[0].tenant_name,
            description: tenant.DataCollection[0].description,
            alias: tenant.DataCollection[0].alias,
            published_from: tenant.DataCollection[0].published_from,
            published_till: tenant.DataCollection[0].published_till,
            is_complete: tenant.DataCollection[0].is_complete,
            site_image_url_path: tenant.DataCollection[0].site_image_url_path,
            status_id: tenant.DataCollection[0].status_id,
            client_Id: tenant.DataCollection[0].client_Id,
            identity_providers_details: tenant.DataCollection[0].identity_providers_details,
            tenant_admin_email: tenant.DataCollection[0].tenant_admin_email
          });
        }
      );

    }

  }

  addTenant(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.tenantService.create(this.data).then(
      () => this.router.navigate(['/secure/tenant'])
    );
  }

  updateTenant() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.tenantService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/tenant']));

  }
}
