
const fs = require('fs');

// console.log(sheet);

function main(){
  path = process.argv[2];
  text = fs.readFileSync(path, 'utf-8');
  toMusicObject(text);
}

function toMusicObject(text){
  let obj = [];
  let music = {};
  for(let odr of text.split(/\r\n|\n/g)){
    odr = odr.replace(/ +/g, ' ');
    console.log('"' + odr + '"');
    let arr = odr.split(' ');
    switch(arr[0]){
      case 'name':
        arr.shift();
        music.name = arr.join(' ');
        if(arr[2])
          console.warn(arr.join(' ') + '\ntoo many arguments for "name" command');
      break;
      case 'bpm':
        if(arr[2] && arr[3]){
          if(+arr[2] !== +arr[2] || +arr[3] !== +arr[3])
            throw new Error('incorrect arguments for "bpm" command');
          obj.push({order: 'bpm', value: +arr[1], timing: [arr[2], +arr[3]]});
        } else if(arr[2] || arr[3] || +arr[1] !== +arr[1])
          throw new Error('incorrect arguments for "bpm" command');
        else
          music.bpm = +arr[1];
      break;
      case 'beat':
      break;
      default:
      break;
    }
  }
  console.log(obj);
  console.log(music);
}

main(); // call main
