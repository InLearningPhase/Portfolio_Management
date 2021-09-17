import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantAppFeatureService } from 'src/app/services/tenantAppFeature.service';

@Component({
  selector: 'app-tenant-app-feature-create',
  templateUrl: './tenant-app-feature-create.component.html',
  styleUrls: ['./tenant-app-feature-create.component.css']
})
export class TenantAppFeatureCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private tenantAppFeatureService: TenantAppFeatureService,
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
      tenant_app_id: 0,
      feature_id: 0
    });

    if (this.id) {

      this.tenantAppFeatureService.get(this.id).then(
        (tenantAppFeature:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            tenant_app_id: tenantAppFeature.DataCollection[0].tenant_app_id,
            feature_id: tenantAppFeature.DataCollection[0].feature_id
            
          });
        }
      );

    }

  }

  addTenantAppFeature(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.tenantAppFeatureService.create(this.data).then(
      () => this.router.navigate(['/secure/tenantAppFeature'])
    );
  }

  updateTenantAppFeature() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.tenantAppFeatureService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/tenantAppFeature']));
  }

}
