import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { HomeComponent } from './home/home.component';
import { LargestNumberComponent } from './largest-number/largest-number.component';
import { RepetitionComponent } from './repetition/repetition.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'anagram', component: AnagramComponent },
  { path: 'repetition', component: RepetitionComponent },
  { path: 'largest-number', component: LargestNumberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
