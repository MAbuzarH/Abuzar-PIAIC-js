//take array from user and make a function to print it
var myinputarr = [];
let input = [];

function sandwich(myinputarr) {
  var size = 5; // Array size
  for (var a = 0; a < size; a++) {
    myinputarr[a] = prompt("Enter array Element " + (a + 1));
  }
  alert("summery:User want a sandwich with these incrediants");
  for (let i = 0; i < size; i++) {
    alert(`${myinputarr[i]}`);
  }
}
sandwich(myinputarr);
sandwich(input);
sandwich(myinputarr);
