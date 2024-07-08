import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoronaVirusComponent } from './corona-virus/corona-virus.component';
import { DailyCoverStoriesComponent } from './daily-cover-stories/daily-cover-stories.component';
import { DarkCapitalComponent } from './dark-capital/dark-capital.component';
import { EditorsPicksComponent } from './editors-picks/editors-picks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoronaVirusComponent,
    DailyCoverStoriesComponent,
    DarkCapitalComponent,
    EditorsPicksComponent,
  
  
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'latest';
}
