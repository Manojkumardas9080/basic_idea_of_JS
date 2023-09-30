function guessNumber(){
  
    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random()*10)+1;
  
  //take input from the user
  const num = parseInt(prompt('enter number'));
  console.log(num);
  
  // take the input until the guess is correct
  while(num != rondom){
    num = parseInt(prompt('guess number from 1 to 10'));
  }
  
  //check if guess is correct
  if(num == random){
    console.log("congratulation! you guessed the correct number");
  }

  guessNumber();

console.log("hello manoj")