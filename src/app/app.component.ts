import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  f_no;
  s_no;
  result=0;
  operator=0;
  add(){
    this.result=this.f_no+this.s_no;
  }
  sub(){
    this.result=this.f_no-this.s_no;
  }
  mul(){
    this.result=this.f_no*this.s_no;
  }
  div(){
    this.result=this.f_no/this.s_no;
  }
}
