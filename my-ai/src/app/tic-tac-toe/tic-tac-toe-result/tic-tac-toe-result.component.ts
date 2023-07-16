import { Component } from '@angular/core';
import { TicTacToeAppService } from '../tic-tac-toe-app.service';

@Component({
    selector: 'app-tic-tac-toe-result',
    templateUrl: './tic-tac-toe-result.component.html',
    styleUrls: ['./tic-tac-toe-result.component.css']
})
export class TicTacToeResultComponent {
    constructor(public ticTacToeApp: TicTacToeAppService) { }
}
