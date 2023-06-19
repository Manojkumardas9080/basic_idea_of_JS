// Function : Ketword-function
function greet(){
    console.log("hi");

}
greet();  //call to greet function
const store = greet(); 
console.log(store)


//Function parameters
function name_age(name, age){
    console.log("Your name is " + name+ " and age is ",age)

}
// if don't pss parameter, print undefine, not will give error
name_age(); //nothing any parameter
name_age("sumit",25); //pass parameter through fn_

//-----------------------------
//create a variable and give it to  fn
const greet2 = function(name, gaon){
    console.log("Hello " + name + " you are from " +gaon);

} 
greet2("Manoj", "jharkhand");