import { Component, HostListener, OnInit } from '@angular/core';
import { faCoffee, faDatabase, faC, faCode } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faGithub, faHtml5, faPython, faJs, } from '@fortawesome/free-brands-svg-icons';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { timeInterval } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
   // icon management
   faAngular = faAngular
   faHtml5 = faHtml5
   faDatabase = faDatabase
   faC = faC
   faPython = faPython
   faJs = faJs
   faCode = faCode

  job: string = 'section1';
  activeBtn: string = 'section1'; // 跟踪当前点击的按钮
  carouselTime: number = 10000;
  intervalId : any;

  constructor(){}

  ngOnInit(): void {
    this.carouselJob()
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  showSection(section: string): void {
    this.job = section;
    this.resetCarousel(30000)
  }

  carouselJob(){
    this.intervalId = setInterval( ()=> {
      this.job = this.job == 'section1' ? 'section2' : 'section1'
    }, this.carouselTime)
  }

  resetCarousel(time: number){
    if (this.intervalId){
      clearInterval(this.intervalId)
    }
    // 重設時間, 重啟計時器
    this.carouselTime = time
    this.carouselJob()

    setTimeout(() => {
      this.carouselTime = 10000
      if(this.intervalId) {
        clearInterval(this.intervalId)
      }
      this.carouselJob()
    }, time)
  }

}
