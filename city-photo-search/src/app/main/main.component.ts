import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  collapse: string;
  show: boolean;

  constructor() { }

  ngOnInit() {
    this.collapse = '';
    this.show = true;
  }


  toggle(){
    this.show = !this.show;
    this.show ? this.collapse = '-' : this.collapse = '+';
  }
}
