import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import {LiligoNotification, NotificationType, INotify} from '../../model/notification'; 
import {NotificationService} from '../../services/notification.service'; 
import { liligoFlyInOut } from '../../model/animation';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [liligoFlyInOut]
})
export class NotificationComponent implements OnInit, AfterViewInit {

  @HostBinding('class.app-notification') true;
  notification: LiligoNotification;
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService
     .getNotification$()
     .subscribe(notification => {
       this.notification = notification; 
     })
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.resetNotification(); 
    }, 5000); 
  }

  cssClass(notification: INotify) {
    if (!notification) {
      return;
    }
    // return css class based on notification type
    switch (notification.type) {
      case NotificationType.Success:
        return 'alert alert-success text-white';
      case NotificationType.Error:
        return 'alert alert-danger text-white';
      case NotificationType.Info:
        return 'alert alert-info';
      case NotificationType.Warning:
        return 'alert alert-warning';
    }
  }
  removeNotification(): void {
    this.notificationService.resetNotification();
  }

  resetNotification(): void {
    this.notificationService.resetNotification();
  }


}
