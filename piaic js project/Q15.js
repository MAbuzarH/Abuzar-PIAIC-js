let guestList = ["ali", "bakar", "jafar", "qasam"];
let info;
for (let i = 0; i < guestList.length; i++) {
  info = confirm(guestList[i] + "I am inviting you to dinnir you want to come");
  if (info) {
    console.log(guestList[i] + "is invited");
  }
}
