import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user'
import { Repo } from '../repo-class/repo';
import { stringify } from '@angular/compiler/src/util';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserProfileService } from '../user-http/user-profile.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient /*private newUser:UserProfileService*/, private userService: UserProfileService) { }



  ngOnInit() {
   this.user = new User("", "", "", "", "", "", "")

    AOS.init();
  }

}
