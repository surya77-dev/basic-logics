let num = 3216;
let sum = 0;
while(num!=0){
  let rem = (num % 10);
  sum = rem + sum;
  num = Math.floor(num / 10);
}
console.log(sum);
