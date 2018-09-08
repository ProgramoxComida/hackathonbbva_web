import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merchante';
  hpage = '780px';
  content = 'content main';
  constructor() {
    // this.hpage = `${window.innerHeight}px`;
    this.content = environment.SECRET;
  }
}
