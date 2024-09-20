let num = 3216;
let mul = 1;
while(num!=0){
  let rem = (num % 100);
  mul = rem * mul;
  num = Math.floor(num / 100);
}
console.log(mul);
