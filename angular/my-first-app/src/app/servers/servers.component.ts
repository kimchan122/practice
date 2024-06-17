import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  /** app.component.html 참고 */
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  standalone: true,
  imports: [ServerComponent],
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  // templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
