import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DatasourceService} from '../services/datasource.service';
import { NotificationService } from '../services/notification.service';
import { SearchPageComponent} from './search-page/search-page.component';
import { MainComponent} from './main.component';
import { HeaderPannelComponent } from './header-pannel/header-pannel.component';

@NgModule({
  imports: [CommonModule, RouterModule , BrowserModule ],
  providers: [AuthService, DatasourceService, NotificationService],
  declarations: [SearchPageComponent, MainComponent, HeaderPannelComponent],
  exports: [MainComponent],
})
export class MainModule { }
