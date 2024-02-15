//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0 ,3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    const isOffBoard = (rowOrCol) => rowOrCol < 0 || rowOrCol > 7;
    if (isOffBoard(blackColumn) || isOffBoard(blackRow) || isOffBoard(whiteColumn) || isOffBoard(whiteRow)) {
      throw new Error('Queen must be placed on the board');
    }

    if (whiteRow === blackRow && whiteColumn === blackColumn) {
      throw new Error('Queens cannot share the same space');
    }
    // Set the class properties
    this.blackRow = blackRow;
    this.blackColumn = blackColumn;
    this.whiteRow = whiteRow;
    this.whiteColumn = whiteColumn;
  }



  toString() {
    const board = Array.from({length: 8}, () => Array.from({length: 8}, () => '_'));
    board[this.whiteRow][this.whiteColumn] = 'W';
    board[this.blackRow][this.blackColumn] = 'B';
    return board.join('\n').replaceAll(',', ' ');
  }

  get white() {
    return [this.whiteRow, this.whiteColumn];
  }

  get canAttack() {
    const hasSameRow = this.whiteRow === this.blackRow;
    const hasSameColumn = this.whiteColumn === this.blackColumn;
    if (hasSameColumn || hasSameRow) return true;

    const canDiagonal = Math.abs(this.whiteRow - this.blackRow) === Math.abs(this.whiteColumn - this.blackColumn);
    if (canDiagonal) return true;

    return false;
  }
}
