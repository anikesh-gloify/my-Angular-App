import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'applazyscroll',
  templateUrl: './lazy-scroll.component.html',
  styleUrls: ['./lazy-scroll.component.css']
})
export class LazyScrollComponent implements OnInit {

  imagesList = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      const url = 'https://loremflickr.com/640/480?random=' + (i +1);
      this.imagesList[i] = {
        url: url,
        show: false
      };
    }
  }
}
