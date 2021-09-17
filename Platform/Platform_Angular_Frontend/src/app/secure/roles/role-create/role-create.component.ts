import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from './../../../services/role.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private roleService: RoleService,
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
      role_name: "",
      role_priviledge: {}
    });

    if (this.id) {

      this.roleService.get(this.id).then(
        (role:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            role_name: role.DataCollection[0].role_name,
            role_priviledge: role.DataCollection[0].role_priviledge
          });
        }
      );

    }

  }

  addRole(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.roleService.create(this.data).then(
      () => this.router.navigate(['/secure/roles'])
    );
  }

  updateRole() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.roleService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/roles']));
  }


}
