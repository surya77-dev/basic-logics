let num = 97;
if(num<2){
  console.log(num + "is not prime"); 
}
else if(num == 2 || num == 3 || num == 5 || num == 7){
  console.log(num + "is a prime");  
}
else if(num%2 == 0 || num%3 == 0 || num%5 == 0 || num%7 == 0){
  console.log(num + "is not a prime");
}
else{
  let count = 0;
  for(let i =12; i*i<num;i+=6 ){
    if(num%i==0 || num%(i+2)==-0){
      count = 1;
      break;
    }
  }
  if(count == 0){
    console.log(num + "is prime"); 
  }
  else{
    console.log(num + "is not prime");
  }
}