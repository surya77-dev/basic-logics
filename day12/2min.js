let a = [5,1,2,6,8,7];
let m1 = Infinity;
let m2 = Infinity;
for(let i = 0; i<a.length; i++){
  n = a[i];
  if(n < m1){
    m2 = m2;
    m1 = n;
  }
  else if(n<m2 && n>m1){
    m2 = n;
  }
}
console.log(m2);
