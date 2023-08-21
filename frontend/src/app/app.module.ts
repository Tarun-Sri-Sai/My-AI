import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LangDetectComponent } from './lang-detect/lang-detect.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HomeTitleComponent } from './home/home-title/home-title.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { LangDetectTitleComponent } from './lang-detect/lang-detect-title/lang-detect-title.component';
import { LangDetectInputComponent } from './lang-detect/lang-detect-input/lang-detect-input.component';
import { LangDetectResultComponent } from './lang-detect/lang-detect-result/lang-detect-result.component';
import { RealEstateTitleComponent } from './real-estate/real-estate-title/real-estate-title.component';
import { RealEstateInputComponent } from './real-estate/real-estate-input/real-estate-input.component';
import { RealEstateResultComponent } from './real-estate/real-estate-result/real-estate-result.component';
import { TicTacToeTitleComponent } from './tic-tac-toe/tic-tac-toe-title/tic-tac-toe-title.component';
import { TicTacToeBoardComponent } from './tic-tac-toe/tic-tac-toe-board/tic-tac-toe-board.component';
import { TicTacToePlayerComponent } from './tic-tac-toe/tic-tac-toe-player/tic-tac-toe-player.component';
import { TicTacToeResultComponent } from './tic-tac-toe/tic-tac-toe-result/tic-tac-toe-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LangDetectComponent,
    RealEstateComponent,
    TicTacToeComponent,
    HomeTitleComponent,
    HomeContentComponent,
    LangDetectTitleComponent,
    LangDetectInputComponent,
    LangDetectResultComponent,
    RealEstateTitleComponent,
    RealEstateInputComponent,
    RealEstateResultComponent,
    TicTacToeTitleComponent,
    TicTacToeBoardComponent,
    TicTacToePlayerComponent,
    TicTacToeResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
