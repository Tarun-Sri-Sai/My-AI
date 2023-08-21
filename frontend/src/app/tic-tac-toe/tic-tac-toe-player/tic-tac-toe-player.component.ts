import { Component } from '@angular/core';
import { TicTacToeAppService } from '../tic-tac-toe-app.service';

@Component({
  selector: 'app-tic-tac-toe-player',
  template: `
    <div class="alert alert-info">Your symbol is {{ ticTacToeApp.PLAYER }}</div>
    <div class="alert alert-info">
      {{
        ticTacToeApp.isPlayerTurn == true
          ? "It is now your turn. Make a move."
          : "Computer is thinking of a move..."
      }}
    </div>

  `,
  styles: [`

  `],
})
export class TicTacToePlayerComponent {
  constructor(public ticTacToeApp: TicTacToeAppService) {}
}

