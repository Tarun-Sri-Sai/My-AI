import { Attribute, Component } from '@angular/core';
import { TicTacToeAppService } from '../tic-tac-toe-app.service';

@Component({
    selector: 'app-tic-tac-toe-cell',
    templateUrl: './tic-tac-toe-cell.component.html',
    styleUrls: ['./tic-tac-toe-cell.component.css']
})
export class TicTacToeCellComponent {
    row: number;
    col: number;

    constructor(public ticTacToeApp: TicTacToeAppService, @Attribute('row') row: number, @Attribute('col') col: number) {
        this.row = row
        this.col = col
    }

    setPlayerMark(): void {
        let matrix: string[][] = this.ticTacToeApp.boardMatrix

        if (matrix[this.row][this.col] != this.ticTacToeApp.EMPTY || !this.ticTacToeApp.isPlayerTurn
            || this.ticTacToeApp.isOver) {
            return
        }
        matrix[this.row][this.col] = this.ticTacToeApp.PLAYER
        this.ticTacToeApp.switchTurns()
        this.ticTacToeApp.runGameLogic()
    }

    getBackgroundColor() {
        let matrix: string[][] = this.ticTacToeApp.boardMatrix

        if (matrix[this.row][this.col] == this.ticTacToeApp.EMPTY) {
            return {
                'background-color': '#F0FFF0',
                'border': '1px solid green'
            }
        }
        return {
            'background-color': '#FFE0E0',
            'border': '1px solid red'
        }
    }

    getMark(): string {
        return this.ticTacToeApp.boardMatrix[this.row][this.col]
    }
}
