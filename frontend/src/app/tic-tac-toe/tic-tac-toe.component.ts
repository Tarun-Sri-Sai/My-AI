import { Component } from '@angular/core';
import { TicTacToeAppService } from './tic-tac-toe-app.service';

@Component({
  selector: 'app-tic-tac-toe',
  template: `
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 d-flex justify-content-center"
        >
          <app-nav></app-nav>
        </div>
      </div>
      <div class="row title-row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 text-center">
          <app-tic-tac-toe-title></app-tic-tac-toe-title>
        </div>
      </div>
      <div class="row content-row">
        <div
          class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 d-flex justify-content-center"
        >
          <app-tic-tac-toe-board></app-tic-tac-toe-board>
        </div>
      </div>
      <div class="row result-row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 text-center">
          <app-tic-tac-toe-player
            *ngIf="!ticTacToeApp.isOver"
          ></app-tic-tac-toe-player>
        </div>
      </div>
      <div class="row result-row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 text-center">
          <app-tic-tac-toe-result
            *ngIf="ticTacToeApp.isOver"
          ></app-tic-tac-toe-result>
        </div>
      </div>
    </div>

  `,
  styles: [`
    .title-row {
      height: 20%;
      align-items: center;
    }

    .content-row {
      height: 45%;
    }

    .result-row {
      align-items: center;
    }

  `],
})
export class TicTacToeComponent {
  constructor(public ticTacToeApp: TicTacToeAppService) {}
}

