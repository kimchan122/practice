import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  @Input() index!: number;
  serverId: number = 0;
  serverStatus: string = 'offline';

  constructor() {
    this.serverId = Math.random();
    this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return (this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline');
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
