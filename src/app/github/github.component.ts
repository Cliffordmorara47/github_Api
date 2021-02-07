import { Component, OnInit } from '@angular/core';
// import  AOS  from 'aos';
import * as AOS from 'aos'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
