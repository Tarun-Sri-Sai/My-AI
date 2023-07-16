import { Component } from '@angular/core';
import { TicTacToeAppService } from './tic-tac-toe-app.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
    constructor(public ticTacToeApp: TicTacToeAppService) { }
}
