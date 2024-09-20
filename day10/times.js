let a = [3,4,3,6,4,4,6,8];
let n = a.length;
for(let i = 0; i<n; i++){
  if(a.indexOf(a[i]==1)){
    let c = 1;
    for(let j = i+1; j<n; j++){
      if(a[i]==a[j]){
        c++;
      }
    }
    console.log(a[i] + "is" + c + "times");
    
  }
}