import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TicTacToeAppService {
    isOver: boolean;
    boardMatrix: string[][];
    isPlayerTurn: boolean;
    result: string;
    scores: Map<string, number>;

    readonly PLAYER: string;
    readonly COMPUTER: string;
    readonly EMPTY: string = ' ';
    readonly X: string = 'X';
    readonly O: string = 'O';

    constructor() {
        this.isOver = false;
        this.boardMatrix = [
            [this.EMPTY, this.EMPTY, this.EMPTY],
            [this.EMPTY, this.EMPTY, this.EMPTY],
            [this.EMPTY, this.EMPTY, this.EMPTY],
        ];
        this.isPlayerTurn = this.getRandomBool();
        this.PLAYER = this.getRandomBool() ? this.X : this.O;
        this.COMPUTER = this.PLAYER == this.X ? this.O : this.X;
        this.result = this.EMPTY;
        this.scores = new Map<string, number>([
            [this.PLAYER, -10],
            [this.EMPTY, 0],
            [this.COMPUTER, 10],
        ]);
        if (!this.isPlayerTurn) {
            this.makeAMove();
        }
    }

    getRandomBool(): boolean {
        return Math.random() < 0.5;
    }

    switchTurns(): void {
        this.isPlayerTurn = !this.isPlayerTurn;
    }

    isFull(): boolean {
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                if (this.boardMatrix[i][j] == this.EMPTY) {
                    return false;
                }
            }
        }
        return true;
    }

    runGameLogic(): void {
        let result: string = this.evaluate();
        if (result == this.EMPTY) {
            if (this.isFull()) {
                this.isOver = true;
                return;
            }
            if (this.isPlayerTurn) {
                return;
            }
            this.makeAMove();
            return;
        }
        this.isOver = true;
        this.result = result;
    }

    evaluate(): string {
        for (let i: number = 0; i < 3; i++) {
            if (
                this.boardMatrix[i][0] != this.EMPTY &&
                this.boardMatrix[i][0] == this.boardMatrix[i][1] &&
                this.boardMatrix[i][1] == this.boardMatrix[i][2]
            ) {
                return this.boardMatrix[i][0];
            }
        }

        for (let i: number = 0; i < 3; i++) {
            if (
                this.boardMatrix[0][i] != this.EMPTY &&
                this.boardMatrix[0][i] == this.boardMatrix[1][i] &&
                this.boardMatrix[1][i] == this.boardMatrix[2][i]
            ) {
                return this.boardMatrix[0][i];
            }
        }
        if (
            this.boardMatrix[0][0] != this.EMPTY &&
            this.boardMatrix[0][0] == this.boardMatrix[1][1] &&
            this.boardMatrix[1][1] == this.boardMatrix[2][2]
        ) {
            return this.boardMatrix[0][0];
        }
        if (
            this.boardMatrix[0][2] != this.EMPTY &&
            this.boardMatrix[0][2] == this.boardMatrix[1][1] &&
            this.boardMatrix[1][1] == this.boardMatrix[2][0]
        ) {
            return this.boardMatrix[0][2];
        }
        return this.EMPTY;
    }

    makeAMove(): void {
        let x: number = -1,
            y: number = -1,
            bestValue: number = -Infinity;
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                if (this.boardMatrix[i][j] != this.EMPTY) {
                    continue;
                }
                this.boardMatrix[i][j] = this.COMPUTER;
                let moveValue: number = this.minimax(false);
                this.boardMatrix[i][j] = this.EMPTY;
                if (moveValue >= bestValue) {
                    bestValue = moveValue;
                    x = i;
                    y = j;
                }
            }
        }
        this.boardMatrix[x][y] = this.COMPUTER;
        this.switchTurns();
        this.runGameLogic();
    }

    minimax(isMaxNode: boolean): number {
        let score: number | undefined = this.scores.get(this.evaluate());
        if (score == undefined) {
            throw new Error('Map key error');
        }
        if (score != 0) {
            return score;
        }
        if (this.isFull()) {
            return 0;
        }
        if (isMaxNode) {
            let bestValue: number = -Infinity;
            for (let i: number = 0; i < 3; i++) {
                for (let j: number = 0; j < 3; j++) {
                    if (this.boardMatrix[i][j] != this.EMPTY) {
                        continue;
                    }
                    this.boardMatrix[i][j] = this.COMPUTER;
                    let moveValue: number = this.minimax(!isMaxNode);
                    this.boardMatrix[i][j] = this.EMPTY;
                    bestValue = Math.max(moveValue, bestValue);
                }
            }
            return bestValue;
        }
        let bestValue: number = Infinity;
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                if (this.boardMatrix[i][j] != this.EMPTY) {
                    continue;
                }
                this.boardMatrix[i][j] = this.PLAYER;
                let moveValue: number = this.minimax(!isMaxNode);
                this.boardMatrix[i][j] = this.EMPTY;
                if (moveValue >= bestValue) {
                    continue;
                }
                bestValue = Math.min(moveValue, bestValue);
            }
        }
        return bestValue;
    }
}
