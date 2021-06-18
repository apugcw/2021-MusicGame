
const fs = require('fs');

// console.log(sheet);

function main(){
  path = process.argv[2];
  text = fs.readFileSync(path, 'utf-8');
}

function toMusicObject(text){
  let obj = [];
  for(let odr of text.split('\n')){
    let arr = odr.split(' ');
  }
}
function BeatToMs(timing);

main(); // call main
