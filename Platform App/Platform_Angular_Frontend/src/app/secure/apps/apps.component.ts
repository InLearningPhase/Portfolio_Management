import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-app',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  app: AppsComponent[] = [];
  data = {} as Data

  constructor(private appService: AppService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.appService.all().then(
      (res: any) => {
        this.app = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.appService.get(id).then(
      (user:any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

      this.appService.delete(id, this.data)
        .then(() => this.router.navigate(['/secure/app']));

  }

}
