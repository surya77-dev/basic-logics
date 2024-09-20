let a = ['a','a','c','d','c','a','b'];
let n = a.length;
for(let i = 0; i<n; i++){
  if(a.indexOf(a[i]==i)){
    let c = 1;
    for(let j = i+1; j<n; j++){
      if(a[i]==a[j]){
        c++;
      }
    }
    console.log(a[i] + "is" + c + "times");
    
  }
}