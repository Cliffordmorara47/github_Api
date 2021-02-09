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
  // repos: any;

  constructor(private http: HttpClient /*private newUser:UserProfileService*/) { }



  ngOnInit() {
    interface ApiResponse {
      avatar_url: Content;
      login: string;
      name: string;
      bio: string;
      public_repos: number;
      followers: number;
      following: number;
    }

    this.http.get<ApiResponse>(environment.apiUrl).subscribe(data => {
      this.user = new User(data.avatar_url, data.login, data.name, data.bio, data.public_repos, data.followers, data.following)
    })

    interface ApiResponse {
      name: string,
      full_name: string,
      description: string,
      created_at: string,
      updated_at: string,
      pushed_at: string
    }
    
    // this.http.get<ApiResponse>(environment.repoUrl).subscribe(data =>{
    //   this.repos = new Repo(data.name, data.full_name, data.description, data.created_at, data.updated_at, data.pushed_at)
    // })

    AOS.init();
  }

}
