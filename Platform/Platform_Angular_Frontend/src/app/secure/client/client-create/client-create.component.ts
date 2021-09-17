import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  form: FormGroup;
  data = {} as Data
  id: number;

  constructor(private formBuilder: FormBuilder,
    private clientService: ClientService,
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
      address_id: 0,
      start_date: '',
      expiry_date: '',
      client_key: "",
      client_name: "",
      description: "",
      contact_id: 0
    });

    if (this.id) {

      this.clientService.get(this.id).then(
        (client:any) => {
          this.form.patchValue({
            "modified_by": "1",
            "created_by": "1",
            "creation_date": new Date(),
            "modified_date": new Date(),
            "rowversion": "1",
            address_id: client.DataCollection[0].address_id,
            start_date: client.DataCollection[0].start_date,
            expiry_date: client.DataCollection[0].expiry_date,
            client_key: client.DataCollection[0].client_key,
            client_name: client.DataCollection[0].client_name,
            description: client.DataCollection[0].description,
            contact_id: client.DataCollection[0].contact_id,
            
          });
        }
      );

    }

  }

  addClient(): void {
    this.data.DataCollection.push(this.form.getRawValue())
    this.clientService.create(this.data).then(
      () => this.router.navigate(['/secure/client'])
    );
  }

  updateClient() {
    this.data.DataCollection.push(this.form.getRawValue())
    console.log(this.data)
    this.clientService.update(this.id, this.data)
      .then(() => this.router.navigate(['/secure/client']));
  }

}
