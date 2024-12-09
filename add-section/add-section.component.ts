import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrl: './add-section.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class AddSectionComponent {

  images = [
    { src: 'https://www.gourmetads.com/wp-content/uploads/2019/02/970x250-starbucks.jpg', isVisible: true },
    { src: 'https://tpc.googlesyndication.com/simgad/6391920711020042510?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qm5PI2LxJ9fJHq3IiS3CLsePWhufw', isVisible: true },
    { src: 'https://i.makeagif.com/media/4-21-2022/cC46Jl.gif', isVisible: true },
    { src: 'https://www.gourmetads.com/wp-content/uploads/2019/02/970x250-starbucks-nitro.jpg', isVisible: true },
    { src: 'https://i.makeagif.com/media/4-29-2022/9UMxj2.gif', isVisible: true },
    { src: 'https://i0.wp.com/madmartech.com/wp-content/uploads/2019/05/970x250-1.png?resize=970%2C250&ssl=1', isVisible: true },
    { src: 'https://i.makeagif.com/media/4-09-2020/aKV_GN.gif', isVisible: true },
    { src: 'https://payload.cargocollective.com/1/14/457436/13538134/970x250-DITR.gif', isVisible: true },
    { src: 'https://www.healthyads.com/wp-content/uploads/2020/04/970x250-billboard.jpg', isVisible: true },
    { src: 'https://cleancalifornia.dot.ca.gov/-/media/cleancalifornia-media/images/stormwater/sf/sf-970x250-gif-spanish.gif', isVisible: true },
    { src: 'https://www.tenementtv.com/wp-content/uploads/2019/06/TT19-970x250-Gif.gif', isVisible: true },
    { src: 'https://www.admtl.com/sites/default/files/2022/23-970x250.gif', isVisible: true }
  ];

  closeImage(index: number) {
    this.images[index].isVisible = false;
  }
}


