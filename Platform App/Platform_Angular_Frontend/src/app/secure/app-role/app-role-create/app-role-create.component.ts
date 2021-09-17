import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { AppRoleService } from 'src/app/services/appRole.service';

@Component({
  selector: 'app-app-role-create',
  templateUrl: './app-role-create.component.html',
  styleUrls: ['./app-role-create.component.css']
})
export class AppRoleCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private appRoleService: AppRoleService,
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
      role_id: 0,
      app_id: 0,
      app_role_permissions: ""
    });

    if (this.id) {

      this.appRoleService.get(this.id).then(
        (appRole:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            role_id: appRole.DataCollection[0].role_id,
            app_id: appRole.DataCollection[0].app_id,
            app_role_permissions: appRole.DataCollection[0].app_role_permissions
          });
        }
      );

    }

  }

  addAppRole(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.appRoleService.create(this.data).then(
      () => this.router.navigate(['/secure/appRole'])
    );
  }

  updateAppRole() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.appRoleService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/appRole']));
  }

}
