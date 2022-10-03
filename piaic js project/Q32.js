let old_Users = ["admin", "ali", "habib", "saghe", "owais"];
let new_Users = ["admin", "ali", "faiz", "kashan"];
for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < new_users.length; j++) {
    if (new_Users[j] == old - Users[i]) {
      console.log(
        new_Users[j] +
          " is already a user, You will have to enter a new user name !"
      );
      break;
    }
  }
}
