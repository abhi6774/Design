import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { GreatComponent } from "./great/great.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "learning", component: LearningComponent },
  { path: "great", component: GreatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
