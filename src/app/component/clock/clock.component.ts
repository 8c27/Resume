import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})


export class ClockComponent implements OnInit {


  hourScales = [
    { inside: 1, insideOpposite: 7, outside: 5, outsideOpposite: 35 },
    { inside: 2, insideOpposite: 8, outside: 10, outsideOpposite: 40 },
    { inside: 3, insideOpposite: 9, outside: 15, outsideOpposite: 45 },
    { inside: 4, insideOpposite: 10, outside: 20, outsideOpposite: 50 },
    { inside: 5, insideOpposite: 11, outside: 25, outsideOpposite: 55 },
    { inside: 6, insideOpposite: 12, outside: 30, outsideOpposite: 0 }
  ];

  clockHour: any;
  clockMinute: any;
  clockSecond: any;
  scales: number[] = Array.from({length: 36}, (_, i) => i + 1);
  hour: any;
  constructor(){}



  ngOnInit(): void {
    this.clockHour = document.querySelector(".clock-hour");
    this.clockMinute = document.querySelector(".clock-minute");
    this.clockSecond = document.querySelector(".clock-second");
    this.runTime();
    setInterval(() => this.runTime(), 1000);
  }


  runTime(): void {
    const dayObj = new Date();
    const second = dayObj.getSeconds();
    const minute = dayObj.getMinutes();
    const hour = dayObj.getHours();
    const hourMinute = dayObj.getMinutes() / 2;   //每分鐘轉0.5度

    this.clockSecond.style.transform = `rotate(${second * 6 + 180}deg) translateX(-50%)`;
    this.clockMinute.style.transform = `rotate(${minute * 6 + 180}deg) translateX(-50%)`;
    this.clockHour.style.transform = `rotate(${hour * 30 + hourMinute + 180}deg) translateX(-50%)`;  //一小時轉30度
    // 轉換為12小時制
    this.hour = hour % 12;
    this.hour = this.hour ? this.hour : 12; // the hour '0' should be '12'

  }

}
