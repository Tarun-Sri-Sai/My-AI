import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LangDetectComponent } from './lang-detect/lang-detect.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lang-detect', component: LangDetectComponent },
  { path: 'real-estate', component: RealEstateComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
