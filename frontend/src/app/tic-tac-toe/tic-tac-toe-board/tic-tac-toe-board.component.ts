import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TicTacToeAppService } from '../tic-tac-toe-app.service';

@Component({
  selector: 'app-tic-tac-toe-board',
  template: `
    <div #board>
      <div *ngFor="let i of indices" class="board-row">
        <div
          *ngFor="let j of indices"
          (click)="playerMark(i, j)"
          [ngStyle]="style(i, j)"
        >
          {{ mark(i, j) }}
        </div>
      </div>
    </div>

  `,
  styles: [`
    .board-row {
      display: flex;
      align-items: center;
    }

  `],
})
export class TicTacToeBoardComponent implements AfterViewInit {
  @ViewChild('board') boardRef!: ElementRef;

  indices: number[];
  cellSize: number;
  fontSize: number;

  constructor(public ticTacToeApp: TicTacToeAppService) {
    this.indices = [...Array(3).keys()];
    this.cellSize = 100;
    this.fontSize = 100;
  }

  ngAfterViewInit() {
    this.calculateCellSize();
  }

  calculateCellSize(): void {
    if (!this.boardRef) {
      return;
    }
    let parentWidth = this.boardRef.nativeElement.offsetWidth;
    this.cellSize = parentWidth / 3;
    this.fontSize = this.cellSize * 0.7;
  }

  playerMark(row: number, col: number): void {
    let matrix: string[][] = this.ticTacToeApp.boardMatrix;

    if (
      matrix[row][col] != this.ticTacToeApp.EMPTY ||
      !this.ticTacToeApp.isPlayerTurn ||
      this.ticTacToeApp.isOver
    ) {
      return;
    }
    matrix[row][col] = this.ticTacToeApp.PLAYER;
    this.ticTacToeApp.switchTurns();
    this.ticTacToeApp.runGameLogic();
  }

  bgColor(row: number, col: number) {
    let matrix: string[][] = this.ticTacToeApp.boardMatrix;
    if (matrix[row][col] == this.ticTacToeApp.EMPTY) {
      return {
        'background-color': '#F0FFF0',
        border: '1px solid green',
      };
    }
    return {
      'background-color': '#FFE0E0',
      border: '1px solid red',
    };
  }

  mark(row: number, col: number): string {
    return this.ticTacToeApp.boardMatrix[row][col];
  }

  style(row: number, col: number) {
    return {
      ...this.bgColor(row, col),
      'height.px': this.cellSize,
      'width.px': this.cellSize,
      'font-size.px': this.fontSize,
      'padding.px': 0,
      'text-align': 'center',
    };
  }
}

