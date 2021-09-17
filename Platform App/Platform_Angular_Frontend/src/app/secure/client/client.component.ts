import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/interface';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: ClientComponent[] = [];
  data = {} as Data

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.clientService.all().then(
      (res: any) => {
        this.client = res.DataCollection;
      }
    );
  }

  async delete(id: number) {

    await this.clientService.get(id).then(
      (user:any) => {
        this.data.DataCollection = user.DataCollection
        console.log(user.DataCollection)
        console.log(this.data)
      }
    );

    this.clientService.delete(id, this.data)
      .then(() => this.router.navigate(['/secure/client']));

  }

}
