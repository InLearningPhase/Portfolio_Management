import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { FeatureService } from 'src/app/services/feature.service';

@Component({
  selector: 'app-feature-create',
  templateUrl: './feature-create.component.html',
  styleUrls: ['./feature-create.component.css']
})
export class FeatureCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private featureService: FeatureService,
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
      feature_name: "",
      app_id: 0,
      base_feature_id: 0,
      feature_description: "",
      feature_key: "",
      operations: "",
      feature_type: 0,

    });

    if (this.id) {

      this.featureService.get(this.id).then(
        (feature:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            feature_id: feature.DataCollection[0].feature_id,
            feature_name: feature.DataCollection[0].feature_name,
            app_id: feature.DataCollection[0].app_id,
            base_feature_id: feature.DataCollection[0].base_feature_id,
            feature_description: feature.DataCollection[0].feature_description,
            feature_key: feature.DataCollection[0].feature_key,
            operations: feature.DataCollection[0].operations,
            feature_type: feature.DataCollection[0].feature_type,

          });
        }
      );

    }

  }

  addFeature(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.featureService.create(this.data).then(
      () => this.router.navigate(['/secure/feature'])
    );
  }

  updateFeature() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.featureService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/feature']));

  }

}
