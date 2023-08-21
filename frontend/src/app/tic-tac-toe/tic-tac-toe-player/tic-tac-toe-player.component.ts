import { Component } from '@angular/core';
import { TicTacToeAppService } from '../tic-tac-toe-app.service';

@Component({
  selector: 'app-tic-tac-toe-player',
  templateUrl: './tic-tac-toe-player.component.html',
  styleUrls: ['./tic-tac-toe-player.component.css'],
})
export class TicTacToePlayerComponent {
  constructor(public ticTacToeApp: TicTacToeAppService) {}
}
