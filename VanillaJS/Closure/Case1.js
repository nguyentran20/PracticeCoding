function outer() {
  let b = 10;
  let c = 100;

  function inner() {
    let a =20;
    console.log("a= "+ a + " b= "+b);
    a++;
    b++;
  }
return inner;
}


let X = outer();
let Y = outer();
X(); X(); X();Y();
