successes = 0
failures = 0

function assert(actual,expected) {
  if(expected === actual) {
    successes++
  } else {
    console.log("expected ", expected, " got ", actual)
    failures++
  }

}

assert(Game.board instanceof Array, true)
assert(Game.board.length, 3)
assert(Game.board[0] instanceof Array, true)
assert(Game.board[0].length, 3)
assert(Game.board[0][0], null)

Game.addPiece({row: 1, col: 2})
assert(Game.board[1][2],'X')

Game.addPiece({row:1, col:0})
assert(Game.board[1][0], 'O')

Game.addPiece({row:1, col:0})
assert(Game.board[1][0], 'O')


console.log(successes + " tests passed.")
console.log(failures + " tests failed.")
