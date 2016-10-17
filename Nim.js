var a = 5;
var b = 5;
var c = 5;

console.log("a: " + a)
console.log("b: " + b)
console.log("c: " + c)


alert("a: " + a + " b: " + b + " c: " + c)

while ((a >= 0) && (b >= 0) && (c >= 0)) {
  var gameEnter = prompt("Enter a pile and letter (a3,b2,etc.)");
  var gameEnter1 = gameEnter.split("");
  console.log(gameEnter1);
  var pan = parseInt(gameEnter1[1]);
  console.log(pan);




if (gameEnter1[0] === "a") {

  var a = a - pan;
  console.log("a: " + a);
  console.log("b: " + b);
  console.log("c: " + c);

alert("a: " + a + " b: " + b + " c: " + c);

if (((a === 0) && (c === 0)) || ((a === 0) && (b === 0))) {
  alert("Computer Wins!")
  break
}

if (a === 0){
  var min = 0;
  var max = b;
  if (b === 0){
    var min = 0;
    var max = c;
    var c = c - c;
    alert("a: " + a + " b: " + b + " c: " + c);
  } else{
  var b = b - b
  alert("a: " + a + " b: " + b + " c: " + c);
  if ((a === 0) && (b === 0)) {
    alert("You Win!");
    break
  }
}
}
var min = 0
var max = a

var a = a - a
alert("a: " + a + " b: " + b + " c: " + c);

if (((a === 0) && (b === 0)) || ((a === 0) && (c === 0))) {
  alert("You Win!")
  break
}
}

  if (a < 0) {

  var remove2 = prompt("Remove a smaller amount");
  var remove3 = parseInt(remove2);
  var newA = a + pan;
  alert(newA);
  console.log("a: " + newA);
  var a = newA - remove3;
  alert("a: " + a + " b: " + b + " c: " + c);
  console.log("a: " + a);

  if ((a === 0) && (b === 0) && (c == 0)) {
    alert("You Win!");
    break
  }
}

  if (gameEnter1[0] === "b") {

    var b = b - pan;
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);

    alert("a: " + a + " b: " + b + " c: " + c);

    if (((a === 0) && (b === 0)) || ((b === 0) && (c === 0))) {
      alert("Computer Wins!")
      break
    }

    if (b === 0){
      var min = 0;
      var max = a;
      if (a === 0){
        var min = 0;
        var max = c;
        var c = c - c;
        alert("a: " + a + " b: " + b + " c: " + c);
      } else{
      var a = a - a;
      alert("a: " + a + " b: " + b + " c: " + c);
      if ((a === 0) && (b === 0)) {
        alert("You Win!");
        break
      }
    }
    }
    var min = 0
    var max = b

    var b = b - b

    alert("a: " + a + " b: " + b + " c: " + c);

    if (((a === 0) && (b === 0)) || ((b === 0) && (c === 0))) {
      alert("You Win!")
      break
    }
  }

    if (b < 0) {

    var remove2 = prompt("Remove a smaller amount");
    var remove3 = parseInt(remove2);
    var newB = b + pan;
    alert(newB);
    console.log("b: " + newA);
    var b = newB - remove3;
    alert("a: " + a + " b: " + b + " c: " + c);
    console.log("b: " + b);
    if ((a === 0) && (b === 0) && c == 0) {
      alert("You Win!");
      break
    }
  }


    if (gameEnter1[0] === "c") {

      var c = c - pan;
      console.log("a: " + a);
      console.log("b: " + b);
      console.log("c: " + c);

      alert("a: " + a + " b: " + b + " c: " + c);

      if (((a === 0) && (c === 0)) || ((b === 0) && (c === 0))) {
        alert("Computer Wins!")
        break
      }

      if (c === 0){
        var min = 0;
        var max = a;
        if (a === 0){
          var min = 0;
          var max = a;
          var a = a - a;
          alert("a: " + a + " b: " + b + " c: " + c);
        } else{
        var a = a - a;
        alert("a: " + a + " b: " + b + " c: " + c);
        if ((a === 0) && (c === 0)) {
          alert("You Win!");
          break
        }
      }
      }
      var min = 0
      var max = c

      var c = c - c

      alert("a: " + a + " b: " + b + " c: " + c);

      if (((a === 0) && (c === 0)) || ((b === 0) && (c === 0))) {
        alert("You Win!")
        break
      }

    }

      if (c < 0) {

      var remove2 = prompt("Remove a smaller amount");
      var remove3 = parseInt(remove2);
      var newC = c + pan;
      alert(newC);
      console.log("c: " + newC);
      var c = newC - remove3;
      alert("a: " + a + " b: " + b + " c: " + c);
      console.log("c: " + c);
}
}


console.log("a: " + a)
console.log("b: " + b)
console.log("c: " + c)
/*if ((a === 0) && (b === 0) && (c == 0)) {
  alert("You Win!");

}
if (((a === 0) && (b === 0)) || ((a === 0) && (c === 0)) || ((b === 0) && (c === 0))) {
  alert("Computer Wins")
  break
}
*/
