import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {User} from '../user/user';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {NavbarComponent} from '../navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  user: any;
  apiUrl = environment.apiUrl;
  token = environment.token;



  constructor(private http:HttpClient) {
    this.user = new User("", "", "", "", "", "", "")
   }

  getUser(){
    interface ApiResponse{
      avatar_url: string,
      login:string, 
      name: string, 
      bio: string, 
      public_repos: string, 
      followers: string, 
      following: string
    }
    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(this.apiUrl + this.token).subscribe(data => {
          this.user = new User(data.avatar_url, data.login, data.name, data.bio, data.public_repos,data.followers, data.following)
          
          
        resolve(User)
        }, err => {
          alert("The user could not be found!!")

          reject(err)
        })
    })
    return promise
  }
}
