//OBJECT : Mthods /properties / identities
/*

// object has values, object get entries, has properties
console.log(console)
console.log('hello')
console.error('hello')  ///error
console.warn('hello')  //warning 
console.log(window)
console.log(window.innerHeight)
console.log(window.innerWidth)

window.alert('Hello world') //window Object
const name = window.prompt('what is your name') //window Object
console.log(name)

*/

//const names = ['hohn','jane','jack'] // array object
//console.log(names);

// JSON : JavaScript Object Notation
const obj = {
    name : 'john',
    age : 25,
    isMarried :false,
    greet: function(){        // greet has a method
        console.log("Hello!")
    },
    address:{          // Object has an another OBJECT Between, address is an another object
        city : 'Giridih',
        state : 'Jharkhand',
        pin : 12345
    }, 
    hobbies : [ 'music', 'sports']  // Array object
}
obj.greet();
console.log(obj.address)
console.log(obj.hobbies)
//console.log(obj);

// FUNCTION
 