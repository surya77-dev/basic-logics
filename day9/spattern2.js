let n = 9;
for(let i = 0; i<n; i++){
  let s = '';
  for(let j = 0; j<n; j++){
    if((j%4)<2){
      s += '* ';
    }
    else{
      s += '# ';
    }
  }
  console.log(s);
  
}