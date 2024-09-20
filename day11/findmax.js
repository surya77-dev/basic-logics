let a = [2,5,1,3,8,9];
let m = a[0];
let n = a.length;
for(let i = 0; i<n; i++){
  if(a[i]>m){
    m = a[i];
  }
}
console.log("max:" + m);
