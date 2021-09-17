import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { FeatureService } from 'src/app/services/feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  feature: FeatureComponent[] = [];
  data = {} as Data

  constructor(private featureService: FeatureService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.featureService.all().then(
      (res: any) => {
        this.feature = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.featureService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.featureService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/feature']));

  }

}
