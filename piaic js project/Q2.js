let personName = prompt("Enter Your Name");
console.log(`${personName.toUpperCase()}`);
console.log(`${personName.toLowerCase()}`);
let NameT2 = personName[0].toUpperCase();
console.log(NameT2 + personName.slice(1, personName.length));
alert(`${personName.toUpperCase()}`);
alert(`${personName.toLowerCase()}`);
alert(` ${NameT2}  ${personName.slice(1, personName.length)}`);
