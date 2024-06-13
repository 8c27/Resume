import { Component } from '@angular/core';

@Component({
  selector: 'app-other-bar',
  templateUrl: './other-bar.component.html',
  styleUrls: ['./other-bar.component.scss']
})
export class OtherBarComponent {
  
  selected: Date | null = null;
}
