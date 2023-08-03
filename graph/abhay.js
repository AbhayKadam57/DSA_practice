function sum(a) {
  return function (b) {
    if (b) {
      let c = a + b;
      return sum(c);
    }

    return a;
  };
}

let a = sum(10);

console.log(a);

console.log(a(9)(2)());
