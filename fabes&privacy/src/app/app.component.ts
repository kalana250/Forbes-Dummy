import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FabesComponent } from './fabes/fabes.component';
import { PrivacyComponent } from './privacy/privacy.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FabesComponent,
    PrivacyComponent,
   

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lists';
}
