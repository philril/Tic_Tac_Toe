successes = 0
failures = 0

function assert(actual,expected) {
  if(expected === actual) {
    successes++
  } else {
    console.error("expected ", expected, " got ", actual)
    failures++
  }

}

game = Game()

function resetBoard() {
  game = Game()
}
printif = false
assert(game.board instanceof Array, true)
assert(game.board.length, 3)
assert(game.board[0] instanceof Array, true)
assert(game.board[0].length, 3)
assert(game.board[0][0], null)

game.addPiece({row: 1, col: 2})
assert(game.board[1][2],'X')

game.addPiece({row:1, col:0})
assert(game.board[1][0], 'O')

game.addPiece({row:1, col:0})
assert(game.board[1][0], 'O')

assert( game.addPiece({row:1, col:1}), 'X')

resetBoard()
game.addPiece({row:0, col:0})
game.addPiece({row:1, col:1})
game.addPiece({row:0, col:1})
game.addPiece({row:1, col:2})
game.addPiece({row:0, col:2})
assert(game.isDone(), true)
assert(game.fetchWinner(), 'X')

resetBoard()
game.addPiece({row:0, col:0})
game.addPiece({row:0, col:1})
game.addPiece({row:0, col:2})
assert(game.isDone(), false)
assert(game.fetchWinner(), null)

console.log(successes + " tests passed.")
console.log(failures + " tests failed.")
