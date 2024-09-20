for(let i = 4; i>0; i--){
  let f = 2;
  let s = '';
  for(let j = i; j<=4; j++){
    if(j<i){
      s += ' ';
    }
    else{
      s += f;
      f += 2;
    }
  }
  console.log(s);
  
}