let n = 4;
for(let i = 0; i<n; i++){
  let s = '';
  for(let j = 0; j<n; j++){
    if(j<i){
      s += ' ';
    }
    else{
      s += ' *'
    }
  }
  console.log(s);
  
}