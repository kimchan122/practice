import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ServersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  /** or
   * styles: [`
   *    h3{
   *      color: darkblue;
   *    }
   * `]
   */
})
export class AppComponent {
  name = 'Max';
}
