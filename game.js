Game = {
  currentPiece: 'X',

  board: [[null, null, null],[null, null, null],[null, null, null]],

  addPiece: function(obj) {
    var row = obj.row
    var col = obj.col
    if (this.board[row][col] === null){
      this.board[row][col] = this.fetchCurrentPiece()
    }
    this.checkForWinner(obj)
    return this.board[row][col]
  },

  checkForWinner: function(obj) {
    var row = obj.row
    var col = obj.col

    // checks current row
    var value = this.board[row][col]
    var check = this.board[row].every(function(cell) {
      return cell === value
    })

    if(check) {
      this.done = true
      this.winner = value
    }
  },

  fetchCurrentPiece: function() {
    var piece = this.currentPiece
    this.currentPiece = (this.currentPiece === 'X' ? 'O' : 'X')
    return piece
  },

  done: false,

  winner: null
}
