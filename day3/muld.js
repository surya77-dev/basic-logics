let num = 3216;
let mul = 1;
while(num!=0){
  let rem = (num % 10);
  mul = rem * mul;
  num = Math.floor(num / 10);
}
console.log(mul);
