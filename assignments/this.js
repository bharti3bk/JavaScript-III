/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. First principle is global Binding .or you can say window binding.
* 2. Second one is Implicit Binding.
* 3. Third principle of this is New Binding.
* 4. Fourth one is Explicit Binding.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
  
   function myName(name){
       console.log(this);
       return name;
   }  

  console.log( myName("Fnu-Bharti"));

// Principle 2 
// code example for Implicit Binding 


   const info = {
    age: 23,
    favColor: function(colorName) {
        console.log(this.age + this.colorName);
        console.log(this);
    }
}; 
info.favColor('white');

// Principle 3
// code example for New Binding 
  
function Person (greeter)
{   
    this.greetings = 'Hello';
    this.greeter = greeter;
    this.speak = function(){
        console.log(this.greetings + this.greeter);
        console.log(this);
    }
}  

const piggy = new Person('Tick');
piggy.speak();


// Principle 4
// code example for Explicit Binding

function People (greeter)
{   
    this.greetings = 'Hello';
    this.greeter = greeter;
    this.speak = function(){
        console.log(this.greetings + this.greeter);
        console.log(this);
    }
}  

const beck = new People('Joel');
const tomy = new People('Shae')
beck.speak.call(tomy);
tomy.speak.call(beck);

