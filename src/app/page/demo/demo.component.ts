import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  slides = [
    { title: 'Slide 1', content: 'This is the first slide content.' },
    { title: 'Slide 2', content: 'This is the second slide content.' },
    { title: 'Slide 3', content: 'This is the third slide content.' }
  ];
  
  constructor(){}

  ngOnInit(): void {

  }

}
