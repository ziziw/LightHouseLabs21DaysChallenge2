function countRows (){
  return GRID.length;
}

function countColumns(){
  return GRID[0].length;
}

function gridSize(){
  return countColumns() + " x " + countRows();
}

function totalCells(){
  return countColumns()*countRows();
}

function convertColumn(){
  return arguments[0].charCodeAt(0)-65;
}

function convertRow(){
  let row = Number(arguments[0].substring(1))-1;
  return row;
}

function columnValid(){
  return convertColumn(arguments[0]) <= GRID.length;
}

function rowValid(){
  return convertRow(arguments[0]) <= GRID[0].length;
}

function lightCell(){
  if(!columnValid(arguments[0]) || !rowValid(arguments[0])){
    return false;
  }
  return GRID[convertRow(arguments[0])][convertColumn(arguments[0])];
}

function isRock(){
  return lightCell(arguments[0]) === "^";
}

function isCurrent(){
  return lightCell(arguments[0]) === "~";
}

function isShip(){
  return lightCell(arguments[0]) === "v";
}

function lightRow(){
  let arr = [];
  for(let i = 0; i < GRID[arguments[0]-1].length; i++){
    arr.push(GRID[arguments[0]-1][i]);
  }
  return arr;
}

function lightColumn(){
  let arr = [];
  for(let i = 0; i < GRID.length; i++){
    arr.push(GRID[i][convertColumn(arguments[0])]);
  }
  return arr;
}

function allRocks(){
  let arrRocks = [];
  for(let i = 0; i < countRows(); i++){
    for(let e = 0; e < countColumns(); e++){
      if(GRID[i][e] === '^'){
        arrRocks.push(String.fromCharCode(e+65) + (i+1));
      }
    }
  }
  return arrRocks;
}

function allCurrents(){
  let arrCurrents = [];
  for(let i = 0; i < countRows(); i++){
    for(let e = 0; e < countColumns(); e++){
      if(GRID[i][e] === '~'){
        arrCurrents.push(String.fromCharCode(e+65) + (i+1));
      }
    }
  }
  return arrCurrents;
}

function allShips(){
  let arrShips = [];
  for(let i = 0; i < countRows(); i++){
    for(let e = 0; e < countColumns(); e++){
      if(GRID[i][e] === 'v'){
        arrShips.push(String.fromCharCode(e+65) + (i+1));
      }
    }
  }
  return arrShips;
}

function firstRock(){
  return allRocks()[0];
}

function firstCurrent(){
  return allCurrents()[0];
}

function shipReport(){
  let arr1 = allShips()[0];
  let arr2 = allShips()[allShips().length-1];
  let arr3 = [];
  arr3.push(arr1, arr2);
  return arr3;
}
