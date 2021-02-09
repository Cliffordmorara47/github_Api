import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

userName: any;
@Output() searchEmitter = new EventEmitter<any>();

getUser(){
  console.log(this.userName);
  
  this.searchEmitter.emit(this.userName)
}

  ngOnInit(): void {
  }

}
