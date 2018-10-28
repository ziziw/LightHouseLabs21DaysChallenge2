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
