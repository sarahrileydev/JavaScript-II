// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function first() {
  console.log("Hello World!");
  const message = "I'm learning Javascript!"

  function second() {
    console.log(`Hello America!${message}`);

    function third() {
      console.log(`Hello Michigan! ${message}`);
    }
    third();
  }
  second();
}
first();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function () {
    count++;
    return count;
  }
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it

const counterFactory = () => {

  let count = 0;
  const myObj = {
    inc: function () {
      count++;
    },
    dec: function () {
     return count--;
    }
  }
};

const newCount = counterFactory();
console.log(newCount());

