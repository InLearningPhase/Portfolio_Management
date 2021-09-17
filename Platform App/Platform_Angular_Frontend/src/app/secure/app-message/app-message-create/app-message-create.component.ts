import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { AppMessageService } from 'src/app/services/appMessage.service';

@Component({
  selector: 'app-app-message-create',
  templateUrl: './app-message-create.component.html',
  styleUrls: ['./app-message-create.component.css']
})
export class AppMessageCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
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
      user_id: 0,
      tenant_id: 0,
      app_id: 0,
      is_notification: '',
      subject: "",
      message_body: "",
      is_read: ''
    });

    if (this.id) {

      this.appMessageService.get(this.id).then(
       ( appMessage:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            user_id: appMessage.DataCollection[0].user_id,
            tenant_id: appMessage.DataCollection[0].tenant_id,
            app_id: appMessage.DataCollection[0].app_id,
            is_notification: appMessage.DataCollection[0].is_notification,
            subject: appMessage.DataCollection[0].subject,
            message_body: appMessage.DataCollection[0].message_body,
            is_read: appMessage.DataCollection[0].is_read
          });
        }
      );

    }

  }

  addAppMessage(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.appMessageService.create(this.data).then(
      () => this.router.navigate(['/secure/appMessage'])
    );
  }

  updateAppMessage() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.appMessageService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/appMessage']));
  }

}
