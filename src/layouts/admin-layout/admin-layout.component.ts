import { Component, HostListener, OnInit } from "@angular/core";

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})

export class AdminLayoutComponent implements OnInit {

    constructor(){

    }

    ngOnInit(): void {
        
    }
    @HostListener('window: resize',['$event'])
    isMobile(){
      const width = window.innerWidth
      if (width > 991){
        return false
      }else {
        return true
      }
    }
    
}