let n = 8;
for(let i = 0; i<n; i++){
  let s = '';
  for(let j = 0; j<n; j++){
    if(i<n/2){
      if(j<n-i){
        s += ' ';
      }
      else{
        s += ' *';
      }
    }
    else{
      if(j<i){
        s += ' ';
      }
      else{
        s += ' *';
      }
    }
  }
  console.log(s);
  
}