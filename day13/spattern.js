let n =4;
for(let i = 1; i<=n; i++){
  let s = '';
  for(let j= 1; j<=n; j++){
    if(j<=n-i){
      s += ' ';
    }
    else if(i == 1 || i == n || j == n || j == n-i+1){
      s += ' *';
    }
    else{
      s += '  ';
    }
  }
  console.log(s);
  
}