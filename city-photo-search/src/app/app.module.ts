import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { HttpClientModule} from "@angular/common/http"; 
import { NotificationComponent } from './main/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MainModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
