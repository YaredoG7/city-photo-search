import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../services/auth.service'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-header-pannel',
  templateUrl: './header-pannel.component.html',
  styleUrls: ['./header-pannel.component.scss']
})
export class HeaderPannelComponent implements OnInit {

  @Input() show: boolean;
  constructor(private auth: AuthService,  private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.clear(); 
    this.router.navigateByUrl("/");
  }

}
