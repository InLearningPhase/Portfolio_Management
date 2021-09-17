import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { FeaturePermissionService } from 'src/app/services/featurePermission.service';

@Component({
  selector: 'app-feature-permission-create',
  templateUrl: './feature-permission-create.component.html',
  styleUrls: ['./feature-permission-create.component.css']
})
export class FeaturePermissionCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private featurePermissionService: FeaturePermissionService,
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
      feature_id: 0,
      operation_permitted: {},
      role_id: 0,
      user_id: 0,
      role_feature_security: {},

    });

    if (this.id) {

      this.featurePermissionService.get(this.id).then(
        (featurePermission:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            feature_id: featurePermission.DataCollection[0].feature_id,
            operation_permitted: featurePermission.DataCollection[0].operation_permitted,
            role_id: featurePermission.DataCollection[0].role_id,
            user_id: featurePermission.DataCollection[0].user_id,
            role_feature_security: featurePermission.DataCollection[0].role_feature_security

          });
        }
      );

    }

  }

  addFeaturePermission(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.featurePermissionService.create(this.data).then(
      () => this.router.navigate(['/secure/featurePermission'])
    );
  }

  updateFeaturePermission() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.featurePermissionService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/featurePermission']));

  }

}
