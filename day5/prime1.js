let num = 2;
let count = 0;
for(let i = 2; i*i<num;i++){
  if(num%i==0){
    count++;
    break;
  }
}
if(count == 0){
  console.log("2 is prime");
}  
else{
  console.log("2 is not prime");
  
}  
