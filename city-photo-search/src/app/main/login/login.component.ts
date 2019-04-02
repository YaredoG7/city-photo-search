import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private auth: AuthService, private notification: NotificationService) { }

  ngOnInit() {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth
        .authenticate(this.username, this.password)
        .subscribe((resp) => {
          if (resp['success'] === true) {
            this.successMessage('successful login')
          } else {
           this.errorMessage('incorrect username or password');
          }
        });
    } else {
      this.errorMessage('please fill in the form correctly');
    }
  }

  successMessage(msg: string){
    this.notification.success(msg);
    setTimeout(() => {
      this.notification.resetNotification();
    }, 30000)
  }

  errorMessage(msg: string){
    this.notification.error(msg);
    setTimeout(() => {
      this.notification.resetNotification();
    }, 30000)
  }
}
