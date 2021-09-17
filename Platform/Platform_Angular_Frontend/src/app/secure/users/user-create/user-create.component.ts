import { RoleService } from './../../../services/role.service';
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
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
      login_name: "",
      birth_date: "",
      date_of_joining: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: 0,
      marital_status: ""
    });

    if(this.id) {

      this.userService.get(this.id).then(
        (user:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            login_name: user.DataCollection[0].login_name,
            birth_date: user.DataCollection[0].birth_date,
            date_of_joining: user.DataCollection[0].date_of_joining,
            first_name: user.DataCollection[0].first_name,
            last_name: user.DataCollection[0].last_name,
            email: user.DataCollection[0].email,
            phone: user.DataCollection[0].phone,
            marital_status: user.DataCollection[0].marital_status
          });
        }
      );

    }


  }

  addUser(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.userService.create(this.data).then(
      () => this.router.navigate(['/secure/users'])
    );
  }

  updateUser() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.userService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/users']));
  }

}
