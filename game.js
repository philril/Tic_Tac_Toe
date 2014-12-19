Game = {
  currentPiece: 'X',

  board: [[null, null, null],[null, null, null],[null, null, null]],

  addPiece: function(obj) {
    var row = obj.row
    var col = obj.col
    if (this.board[row][col] === null){
      this.board[row][col] = this.fetchCurrentPiece()
    }
    return this.board[row][col]
  },

  fetchCurrentPiece: function() {
    var piece = this.currentPiece
    this.currentPiece = (this.currentPiece === 'X' ? 'O' : 'X')
    return piece
  }
}
