import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { SearchPageComponent } from './main/search-page/search-page.component';
import {AuthService } from './services/auth.service';
import {HttpClientModule} from "@angular/common/http";  
import {DatasourceService} from './services/datasource.service';
import { NotificationComponent } from './main/notification/notification.component';
import {NotificationService } from './services/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchPageComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule
  ],
  providers: [AuthService, DatasourceService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
