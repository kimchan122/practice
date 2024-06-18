import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  /** app.component.html 참고 */
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  standalone: true,
  imports: [ServerComponent, CommonModule, FormsModule],
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  serverStatus = 'offline';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
