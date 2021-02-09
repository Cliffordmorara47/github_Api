import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user'
import { stringify } from '@angular/compiler/src/util';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NavbarComponent } from '../navbar/navbar.component';
import {UserProfileService} from '../user-http/user-profile.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient, private newUser:UserProfileService) { }



  ngOnInit() {

    AOS.init();
  }

}
