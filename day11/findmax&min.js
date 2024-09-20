let a = [2,5,1,3,8,9];
let n = a.length;
let max = a[n-1];
let min = a[0];
for(let i = 0; i<n; i++){
  if(a[i]>max){
    max = a[i];
  }
  else if(a[i]<min){
    min = a[i];
  }
}
console.log("max:" + max);
console.log("min:" + min);

