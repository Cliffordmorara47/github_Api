import { Content } from "@angular/compiler/src/render3/r3_ast";

export class User {
    constructor(
        public avatar_url: string,
        public login:string, 
        public name: string, 
        public bio: string, 
        public public_repos: string, 
        public followers: string, 
        public following: string){}
}
