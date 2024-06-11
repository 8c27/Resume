import { Component, HostListener, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {path: '/home', title: 'Home', icon: 'home', class: ''},
  {path: '/demo', title: 'Demo', icon: 'perm_media', class: ''},
  {path: '/map', title: 'Map', icon: 'local_library', class:''}
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  menuItems: any[] = [];

  constructor(){}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter( menuItem => menuItem)
  }



}
