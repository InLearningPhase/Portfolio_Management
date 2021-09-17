import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-app-create',
  templateUrl: './app-create.component.html',
  styleUrls: ['./app-create.component.css']
})
export class AppCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private appService: AppService,
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
      app_name: "",
      app_description: ""
    });

    if (this.id) {

      this.appService.get(this.id).then(
        (app:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            app_name: app.DataCollection[0].app_name,
            app_description: app.DataCollection[0].app_description
          });
        }
      );

    }

  }

  addApp(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.appService.create(this.data).then(
      () => this.router.navigate(['/secure/app'])
    );
  }

  updateApp() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.appService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/app']));
  }

}
