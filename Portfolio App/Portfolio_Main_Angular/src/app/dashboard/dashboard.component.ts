import { Component, OnInit } from '@angular/core';
import { Data, User } from '../interface/interface';
import { CommonService } from '../services/common.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tokenDetails: any;
  access_token: any;
  data = {} as Data
  user = {} as User;
  sub: string;

  constructor(
    private commonService: CommonService,
    private userService: UserService) { }

  ngOnInit(): void {
    
    this.data.DataCollection = []

    this.checkUserExist()

  }

  //*************************************** Checks if user already exist in the database *****************************//

  async checkUserExist() {

    this.sub = localStorage.getItem('sub')
    await this.commonService.getUserBySub(this.sub).then((res: any) => {
      console.log(res.DataCollection[0])

      if (res.DataCollection[0] == undefined) {
        this.user.email = localStorage.getItem("email")
        this.user.sub = this.sub
        this.data.DataCollection.push(this.user)

        setTimeout(() => {
          this.userService.create(this.data)
        }, 500)

      }

    })

  }

}
