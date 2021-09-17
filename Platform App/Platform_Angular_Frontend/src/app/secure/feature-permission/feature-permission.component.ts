import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { FeaturePermissionService } from 'src/app/services/featurePermission.service';

@Component({
  selector: 'app-feature-permission',
  templateUrl: './feature-permission.component.html',
  styleUrls: ['./feature-permission.component.css']
})
export class FeaturePermissionComponent implements OnInit {

  featurePermission: FeaturePermissionComponent[] = [];
  data = {} as Data

  constructor(private featurePermissionService: FeaturePermissionService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.featurePermissionService.all().then(
      (res: any) => {
        this.featurePermission = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.featurePermissionService.get(id).then(
      (user:any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

      this.featurePermissionService.delete(id, this.data)
        .then(() => this.router.navigate(['/secure/featurePermission']));

  }

}
