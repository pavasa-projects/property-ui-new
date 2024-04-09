import {Component, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('loginComponent') modal: LoginComponent;

  constructor() {
  }

  openLoginModal(): void {
    this.modal.open();
  }

}

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(value: any): string {
    const minutes = Math.floor(value / 60);
    return (('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2));
  }
}
