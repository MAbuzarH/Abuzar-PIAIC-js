let arr = ["admin", "bob", "alis", "sarver", "qasam"];
for (let i = 0; i < 5; i++) {
  if (arr[i] == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log("Hello " + arr[i] + " , thank you for logging in again");
  }
}
console.log("\t \t if list is empty ");
arr = [];
if (arr.length == 0) {
  console.log("We need to find some users!");
}
