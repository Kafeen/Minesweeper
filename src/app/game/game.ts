function initTiles() {
  var tiles = [];

  // Inialise blank tiles
  for(let i = 0; i < 8; ++i) {
    var row = [];

    for(let j = 0; j < 8; ++j) {
      row.push({id: i * 8 + j, isMine: false, isRevealed: false, isFlagged: false});
    }

    tiles.push(row);
  }

  // Spawn mines
  for(let i = 0; i < 8; ++i) {
    let row = Math.floor(Math.random() * 8);
    let col = Math.floor(Math.random() * 8);

    while(tiles[row][col].isMine) {
      row = Math.floor(Math.random() * 8);
      col = Math.floor(Math.random() * 8);
    }

    tiles[row][col].isMine = true;
  }

  // Link neibours
  for(let i = 0; i < 8; ++i) {
    for(let j = 0; j < 8; ++j) {
      var tile = tiles[i][j];

      tile.neighbour = [];
      if(i > 0) {
        if(j > 0) {
          tile.neighbour.push(tiles[i-1][j-1]);
        }
        tile.neighbour.push(tiles[i-1][j]);
        if(j < (8-1)) {
          tile.neighbour.push(tiles[i-1][j+1]);
        }
      }

      if(j > 0) {
        tile.neighbour.push(tiles[i][j-1]);
      }
      if(j < (8-1)) {
        tile.neighbour.push(tiles[i][j+1]);
      }
      
      if(i < (8-1)) {
        if(j > 0) {
          tile.neighbour.push(tiles[i+1][j-1]);
        }
        tile.neighbour.push(tiles[i+1][j]);
        if(j < (8-1)) {
          tile.neighbour.push(tiles[i+1][j+1]);
        }
      }

      tile.numBombsNear = 0;
      for(var k = 0; k < tile.neighbour.length; ++k) {
        if(tile.neighbour[k].isMine) {
          ++tile.numBombsNear
        }
      }
    }
  }

  return tiles;
}

function revealTile(tile) {
  if(tile.isFlagged)
    return;

  tile.isRevealed = true;

  if(tile.isMine) {
    console.log('GAME OVER');
    return;
  }
  
  if(tile.numBombsNear > 0)
    return;

  for(var k = 0; k < tile.neighbour.length; ++k) {
    if(!tile.neighbour[k].isRevealed) {
      revealTile(tile.neighbour[k]);
    }
  }
}

function toggleTileFlag(tile) {
  tile.isFlagged = !tile.isFlagged;
}

export function createGame() {
  return {
    rows: 8,
    columns: 8,
    mines: 8,
    tiles: initTiles(),
    reveal: revealTile,
    flag: toggleTileFlag
  }
}
