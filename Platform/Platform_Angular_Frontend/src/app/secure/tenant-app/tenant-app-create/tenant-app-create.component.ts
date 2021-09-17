import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantAppService } from 'src/app/services/tenantApp.service';

@Component({
  selector: 'app-tenant-app-create',
  templateUrl: './tenant-app-create.component.html',
  styleUrls: ['./tenant-app-create.component.css']
})
export class TenantAppCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private tenantAppService: TenantAppService,
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
      app_id: 0,
      connection_string: "",
      all_features: ''
    });

    if (this.id) {

      this.tenantAppService.get(this.id).then(
        (tenantApp:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            tenant_id: tenantApp.DataCollection[0].tenant_id,
            app_id: tenantApp.DataCollection[0].app_id,
            connection_string: tenantApp.DataCollection[0].connection_string,
            all_features: tenantApp.DataCollection[0].all_features
            
          });
        }
      );

    }

  }

  addTenantApp(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.tenantAppService.create(this.data).then(
      () => this.router.navigate(['/secure/tenantApp'])
    );
  }

  updateTenantApp() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.tenantAppService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/tenantApp']));

  }

}
