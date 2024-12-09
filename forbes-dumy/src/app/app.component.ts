import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isNavbarVisible: boolean = false;

  title = 'forbes-dumy';

  @HostListener('window:scroll', [])
    onWindowScroll() {
        // Check if the user has scrolled down 50px (adjust as needed)
        if (window.pageYOffset > 50) {
            this.isNavbarVisible = true;
        } else {
            this.isNavbarVisible = false;
        }
    }


}
