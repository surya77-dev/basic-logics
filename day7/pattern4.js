let i =0;
while(i<4){
  let str = '';
  for(let j = 0; j<4; j++){
    if(j<i){
      str += ' ';
    }
    else{
      str += '*';
    }
  }
  i++;
  console.log(str);
  
}