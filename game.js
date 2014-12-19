Game = function() {
  var currentPiece = 'X'
  var board = [[null, null, null],[null, null, null],[null, null, null]]
  var done =  false
  var winner =  null

  var checkForWinner = function(obj) {
    var row = obj.row
    var col = obj.col

    // checks current row
    var value = board[row][col]
    var check = board[row].every(function(cell) {
      return cell === value
    })

    if(check) {
      done = true
      winner = value
    }
  }

  var fetchCurrentPiece = function() {
    var piece = currentPiece
    currentPiece = (currentPiece === 'X' ? 'O' : 'X')
    return piece
  }

  return {
    isDone: function() { return done },
    fetchWinner: function() { return winner },
    board: board,
    addPiece: function(obj) {
      var row = obj.row
      var col = obj.col
      if (board[row][col] === null){
        board[row][col] = fetchCurrentPiece()
      }
      checkForWinner(obj)
      return board[row][col]
    }
  }
}
