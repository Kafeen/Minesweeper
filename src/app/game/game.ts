function initTiles() {
  var tiles = [];

  for(let i = 0; i < 8; ++i) {
    var row = [];

    for(let j = 0; j < 8; ++j) {
      row.push({id: i * 8 + j, isMine: true, isRevealed: false});
    }

    tiles.push(row);
  }

  return tiles;
}

export function createGame() {
  return {
    rows: 8,
    columns: 8,
    tiles: initTiles()
  }
}
