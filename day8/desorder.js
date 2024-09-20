let a = [6,4,7,2,5];
for(let i = 0; i<a.length-1; i++){
  for(let j = i+1; j<a.length; j++){
    if(a[i]<a[j]){
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
  }
}
console.log(a);
