import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { User} from '../user/user'
import { stringify } from '@angular/compiler/src/util';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      avatar_url: Content;
      login: string;
      name: string;
      bio: string;
      public_repos: number;
      followers: number;
      following: number;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/Cliffordmorara47?access_token=dcb36705d19bc2e2b70ed47ce1fbbebdb7fc49b5").subscribe(data=>{
      this.user = new User(data.avatar_url, data.login, data.name, data.bio, data.public_repos, data.followers, data.following)
    })
    AOS.init();
  }

}
