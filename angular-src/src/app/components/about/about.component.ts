import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  image_src: string = '';

  constructor() { 
   this.image_src = '\src\assets\logo.png';
  }

  ngOnInit() {
  }

}
