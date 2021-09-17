import { Data, User } from '../../interfaces/interface';
import { TenantService } from '../../services/tenant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenent',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  tenant: TenantComponent[] = [];
  data = {} as Data

  constructor(private tenantService: TenantService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.tenantService.all().then(
      (res: any) => {
        this.tenant = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.tenantService.get(id).then(
      (user: any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.tenantService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/tenant']));


  }

}
