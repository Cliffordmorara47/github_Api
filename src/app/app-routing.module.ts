import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  {path: 'github', component: GithubComponent},
  // { path: '**', component: NotFoundComponent },
  // {path: 'github', component: GithubComponent},
  {path: '', redirectTo:"homepage", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
