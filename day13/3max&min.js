let a=[5,1,2,6,8,7];
let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
let min1 = min2 = min3 = Infinity;
for(let i = 0; i<a.length;i++){
  n = a[i];
  if(n > max1){
    max3 = max2;
    max2 = max1;
    max1 = n;
  }
  else if(n>max2 && n < max1){
    max3 = max2;
    max2 = n;
  }
  else if(n>max3 && n < max1){
    max3 = n;
  }
  if(n< min1){
    min3 = min2;
    min2 = min1;
    min1 = n;
  }
  else if(n<min2 && n> min1){
    min3 = min2;
    min2 = n;
  }
  else if(n< min3 && n> min1){
    min3 = n;
  }
}
console.log(max3);
console.log(min3);

