import { Data, User } from '../../interfaces/interface';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  data = {} as Data

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.userService.all().then(
      (res: any) => {
        this.users = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.userService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    console.log(this.data)

    this.userService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/users']));

  }

}
