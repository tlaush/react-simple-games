import TicTacToeModel from './TicTacToeModel';

class TicTacToeHistory {
  get history() {
    return this._history;
  }

  constructor(history = null) {
    if (history === null) {
      history = [new TicTacToeModel()];
    }
    this._history = history;
  }

  addMove(boardState) {
    const newHistory = this.history.slice().concat(boardState);
    return new TicTacToeHistory(newHistory);
  }

  get latest() {
    return this.history[this.lastBoard];
  }

  get lastBoard() {
    return this.history.length - 1;
  }

  getBoard(boardNum) {
    if (boardNum > this.lastBoard) {
      throw new Error("Invalid board number");
    }
    return this.history[boardNum];
  }
}

export default TicTacToeHistory;
