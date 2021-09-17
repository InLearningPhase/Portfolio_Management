import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  role: RolesComponent[] = [];
  data = {} as Data

  constructor(private roleService: RoleService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.roleService.all().then(
      (res: any) => {
        this.role = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.roleService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.roleService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/roles']));


  }

}