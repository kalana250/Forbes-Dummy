import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrl: './add-section.component.css',
  standalone: true,
  imports: [
    NgClass
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms', style({opacity: 1})),
      ]),
    ]),
  ]
})
export class AddSectionComponent {

  images = [
    { src: 'https://www.admtl.com/sites/default/files/2022/23-970x250.gif', isVisible: true }
  ];

  closeImage(index: number) {
    this.images[index].isVisible = false;
  }
}


