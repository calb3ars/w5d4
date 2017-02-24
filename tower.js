class Board {
  constructor() {
    this.towerOne = [1,2,3];
    this.towerTwo = [];
    this.towerThree = [];
    this.towers = [this.towerOne, this.towerTwo, this.towerThree];
  }

  checkMove(from, to) {
    console.log(this.towers[to][0]);
    console.log(this.towers[from][0]);
    return (!this.towers[to][0] || this.towers[to][0] > this.towers[from][0]);
  }

  endgame() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }

  move(from, to) {
    this.towers[to].unshift(this.towers[from].shift());
  }

  towers() {
    return this.towers;
  }
}

module.exports = Board;
