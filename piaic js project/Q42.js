let magicians = ["jack", "paol", "pele", "nose"];

function show_magicians() {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}
show_magicians(magicians);
function make_great(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    newArr = [magicians[i]];
    console.log("Great " + magicians[i]);
  }
}
make_great(magicians);

// show_magicians(magicians);
