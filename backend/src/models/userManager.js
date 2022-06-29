const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  static table = "user";

  insert(newUser) {
    let tuples = "firstname, lastname, email, password, agence_Id";
    let values = "?,?,?,?,?";
    const keyTable = [
      newUser.firstname,
      newUser.lastname,
      newUser.email,
      newUser.password,
      newUser.agence_Id,
    ];

    if (newUser.city) {
      tuples += ", city";
      values += ",?";
      keyTable.push(newUser.city);
    }
    if (newUser.skill) {
      tuples += ", skill";
      values += ",?";
      keyTable.push(newUser.skill);
    }
    if (newUser.type) {
      tuples += ", type";
      values += ",?";
      keyTable.push(newUser.type);
    }
    console.error(newUser, tuples, values, keyTable);
    return this.connection.query(
      `insert into ${userManager.table} (${tuples}) values (${values})`,
      keyTable
    );
  }
}

module.exports = userManager;
