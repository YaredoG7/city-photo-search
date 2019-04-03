import { Component, OnInit } from '@angular/core';
import {NotificationService} from './services/notification.service';
import {LiligoNotification, INotify} from './model/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'City Photo Finder';

  public notification: INotify;

  constructor(private notificationService: NotificationService){}


  ngOnInit() {
    this.subscribeToNotification();
  }

  subscribeToNotification(): void {
    this.notification = new LiligoNotification; 
    this.notificationService
      .getNotification$()
      .subscribe(notification =>{
        this.notification = notification; 
      }); 
  }
  displayNotifications(): boolean {
    return this.notification.message.length > 0;
  }
}
