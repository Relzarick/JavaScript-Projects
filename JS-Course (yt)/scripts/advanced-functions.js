/*
const function1 = function () {
  console.log("hello2");
};

// console.log(function1());
// console.log(typeof function1);
// function1();

const object1 = {
  num: 2,
  fun: function () {
    console.log("hello3");
  },
};

// object1.fun();

function display(param) {
  console.log(param);
}

// display(2);

function run(param) {
  param();
}

run(function () {
  console.log("hello4");
});*/

setTimeout(function () {
  console.log("time out");
}, 3000);

console.log("next line");
