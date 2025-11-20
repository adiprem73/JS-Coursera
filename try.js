class Person {
  sayHello() {
    console.log("Hello");
  }
}

class Friend extends Person {
  sayHello() {
    console.log("Hey");
  }
}

var result = new Friend();
result.sayHello();


var diary = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDiary() {
  for (item of diary) {
    console.log(item);
  }
}
logDiary();