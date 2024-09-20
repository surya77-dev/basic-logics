let a = [3,9,8,1,2];
for(let i = 0; i<a.length-1; i++){
  for(let j = i+1; j<a.length; j++){
    if(a[i]<a[j]){
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
  }
}
console.log("min:" + a[a.length-1]);
console.log("max:" + a[0]);
