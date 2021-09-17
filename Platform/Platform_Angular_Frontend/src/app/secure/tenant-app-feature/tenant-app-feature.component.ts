import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantAppFeatureService } from 'src/app/services/tenantAppFeature.service';

@Component({
  selector: 'app-tenant-app-feature',
  templateUrl: './tenant-app-feature.component.html',
  styleUrls: ['./tenant-app-feature.component.css']
})
export class TenantAppFeatureComponent implements OnInit {

  tenantAppFeature: TenantAppFeatureComponent[] = [];
  data = {} as Data

  constructor(private tenantAppFeatureService: TenantAppFeatureService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.tenantAppFeatureService.all().then(
      (res: any) => {
        this.tenantAppFeature = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.tenantAppFeatureService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.tenantAppFeatureService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/tenantAppFeature']));

  }

}
