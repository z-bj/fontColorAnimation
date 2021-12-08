function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(random(0, 36));

let nbr = random(0, 35);

console.log(nbr);

const COLOR_LIST = [
  "black",
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "grey",
  "aqua",
  "beige",
  "coral",
  "cyan",
  "crimson",
  "silver",
  "maroon",
  "fuchsia",
  "lime",
  "olive",
  "navy",
  "teal",
  "azure",
  "bisque",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "cornsilk",
  "crimson",
  "darkblue",
  "gold",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
];
console.log(COLOR_LIST.length);

function fisherYatesShuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); //random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
}

var tmpArray = [1, 3, 5];
fisherYatesShuffle(tmpArray);
console.log(tmpArray);

let Shuffle = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //random index between 0 and i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // SWAPPING
  }
};

console.log(MAHABA.length);
