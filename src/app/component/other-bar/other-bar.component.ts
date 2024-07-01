import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-other-bar',
  templateUrl: './other-bar.component.html',
  styleUrls: ['./other-bar.component.scss']
})
export class OtherBarComponent implements OnInit {

  // icon management
  faFacebook = faFacebook
  faGithub = faGithub
  faInstagram = faInstagram
  faGoogle = faGoogle
  faPhone = faPhone
  
  pictureIndex :number = 1;
  pictures = [
    {'url': 'assets/img/asy.jpg', 'num': 1},
    {'url': 'assets/img/ghibil.jpg', 'num': 2},
    {'url': 'assets/img/humm.jpg', 'num': 3},
    {'url': 'assets/img/tree.jpg', 'num':4},
    {'url': 'assets/img/back.jpg', 'num':5}
  ]
  pictureStyle = [
    "object-position: center 10%;",
    "object-position: center 20%;",
    "object-position: center 25%;",
    "object-position: center 5%;",
    "object-position: center 5%;",
  ]

  maxNum = this.pictures.length

  constructor(public bgSvc: BackgroundService){}


  ngOnInit(): void {
    this.pictureIndex = 1;
  }

  prev(){
    // 控制照片選取的功能 --> 上一頁
    this.pictureIndex = this.pictureIndex >1 ? this.pictureIndex - 1 : this.pictures.length 
    this.updateBackground()
  }
  next(){
    // 控制照片選取的功能 --> 下一頁
    this.pictureIndex = this.pictureIndex <= this. pictures.length -1 ? this.pictureIndex +1 : 1 
    this.updateBackground()
  }

  currentPicture(){
    const pic = this.pictures.find(p => p.num === this.pictureIndex)
    return pic?.url
  }

  currentStyle(){
    const pic = this.pictures.find(p => p.num == this.pictureIndex)
    let num = pic?.num
    let data = null
    if (num){
      data = this.pictureStyle[num - 1]
    }
    return data
  }

  updateBackground(){
    const pic = this.pictures.find(p => p.num == this.pictureIndex)
    const url: any = pic?.url
    this.bgSvc.setBackground(url)
  }
}
