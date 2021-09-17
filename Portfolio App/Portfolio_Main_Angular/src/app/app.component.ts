import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-frontend';

  socket = io(environment.socket_io_url);

  constructor() {

    //FIRST ACTION hapens wheN the page opens firSt time , this is one time activity 
    this.socket.on('connection', function (socket) {
      console.log('socket has been connected');
      console.log(socket)
    });

    //Thi seven Is caLled whEn  the server sends the data back to the client
    this.socket.on('successResponseFromServer', function (data) {
      //evalaute the requestGuid from the dictionary and then match and then show themessgae in console
      console.log(data);
      //for find you can use 'Filter' 
      //remove the item from the dictionary /array
    });

    //this is the event which is called when the server register the socket id and sends back the socket id
    this.socket.on('socketIdFromServer', function (data) {
      console.log(data)
      sessionStorage.setItem('socket_id', data.socket_id);
    });

  }

}
