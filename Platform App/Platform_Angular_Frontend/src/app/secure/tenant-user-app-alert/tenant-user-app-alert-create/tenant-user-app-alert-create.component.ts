import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { TenantUserAppAlertService } from 'src/app/services/tenantUserAppAlert.service';

@Component({
  selector: 'app-tenant-user-app-alert-create',
  templateUrl: './tenant-user-app-alert-create.component.html',
  styleUrls: ['./tenant-user-app-alert-create.component.css']
})
export class TenantUserAppAlertCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection: any = [];
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private tenantUserAppAlertService: TenantUserAppAlertService,
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
      alert_type: "",
      alert_name: "",
      alert_desc: "",
      from_date_time: '',
      alert_duration_type: "",
      subscription_date: '',
      has_unsubscribed: '',
      tenant_user_app_id: 0,
      tenant_user_id: 0,
      user_id: 0
    });

    if (this.id) {

      this.tenantUserAppAlertService.get(this.id).then(
        (tenantUserAppAlert:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            alert_type: tenantUserAppAlert.DataCollection[0].alert_type,
            alert_name: tenantUserAppAlert.DataCollection[0].alert_name,
            alert_desc: tenantUserAppAlert.DataCollection[0].alert_desc,
            from_date_time: tenantUserAppAlert.DataCollection[0].from_date_time,
            alert_duration_type: tenantUserAppAlert.DataCollection[0].alert_duration_type,
            subscription_date: tenantUserAppAlert.DataCollection[0].subscription_date,
            has_unsubscribed: tenantUserAppAlert.DataCollection[0].has_unsubscribed,
            tenant_user_app_id: tenantUserAppAlert.DataCollection[0].tenant_user_app_id,
            tenant_user_id: tenantUserAppAlert.DataCollection[0].tenant_user_id,
            user_id: tenantUserAppAlert.DataCollection[0].user_id

          });
        }
      );

    }

  }

  addTenantUserAppAlert(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.tenantUserAppAlertService.create(this.data).then(
      () => this.router.navigate(['/secure/tenantUserAppAlert'])
    );
  }

  updateTenantUserAppAlert() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.tenantUserAppAlertService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/tenantUserAppAlert']));

  }

}
