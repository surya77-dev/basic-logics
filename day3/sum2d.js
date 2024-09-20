let num = 4321;
let sum = 0;
while(num!=0){
  let rem = (num % 100);
  sum = rem + sum;
  num = Math.floor(num / 100);
}
console.log(sum);
