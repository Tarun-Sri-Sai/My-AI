import { Component } from '@angular/core';
import { TicTacToeAppService } from '../tic-tac-toe-app.service';

@Component({
    selector: 'app-tic-tac-toe-result',
  template: `
    <div class="alert alert-info">
        {{
            ticTacToeApp.result != ticTacToeApp.EMPTY
                ? ticTacToeApp.result + " has won!"
                : "Game has tied."
        }}
    </div>

  `,
  styles: [`

  `],
})
export class TicTacToeResultComponent {
    constructor(public ticTacToeApp: TicTacToeAppService) {}
}

