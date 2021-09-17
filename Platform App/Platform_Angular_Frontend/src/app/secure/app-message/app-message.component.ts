import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { AppMessageService } from 'src/app/services/appMessage.service';

@Component({
  selector: 'app-app-message',
  templateUrl: './app-message.component.html',
  styleUrls: ['./app-message.component.css']
})
export class AppMessageComponent implements OnInit {

  appMessage: AppMessageComponent[] = [];
  data = {} as Data

  constructor(private appMessageService: AppMessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.appMessageService.all().then(
      (res: any) => {
        this.appMessage = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.appMessageService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.appMessageService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/appMessage']));

  }

}
