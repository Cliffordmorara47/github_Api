import { Content } from "@angular/compiler/src/render3/r3_ast";

export class User {
    constructor(public avatar_url: Content, public login:string, public name: string, public bio: string, public public_repos: number, public followers: number, public following: number){}
}
