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
  // apiUrl = 'https://api.github.com/users/';
  // token = '?access_token=dcb36705d19bc2e2b70ed47ce1fbbebdb7fc49b5';



  constructor(private http:HttpClient) {
    // this.user = new User("", "", "", "", "", "", "")
   }

  getUser(){
    interface ApiResponse{
      avatar_url: Content,
      login:string, 
      name: string, 
      bio: string, 
      public_repos: string, 
      followers: string, 
      following: string
    }
    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).subscribe(data => {
          this.user = User  
          
          
        resolve(User)
        }, err => {
          alert("The username could not be found!!")

          reject(err)
        })
    })
    return promise
  }
}
