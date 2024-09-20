let i = 4;
while(i>0){
  let str = '';
  for(let j = 0; j<=4; j++){
    if(j<i){
      str += ' ';
    }
    else{
      str += '*';
    }
  }
  i--;
  console.log(str);
  
}