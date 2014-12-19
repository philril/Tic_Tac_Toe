$('.cell').on('click', function() {
  var row = this.dataset['row']
  var col = this.dataset['col']

  piece = Game.addPiece({row: row, col: col})
  this.innerHTML = piece
})

