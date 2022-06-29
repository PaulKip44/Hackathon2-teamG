const AbstractManager = require("./AbstractManager");

class agenceManager extends AbstractManager {
  static table = "agence";

  insert(newAgence) {
    let tuples = "city";
    let values = "?";
    const keyTable = [newAgence.city];

    if (newAgence.coordinates) {
      tuples += ", coordinates";
      values += ",?";
      keyTable.push(newAgence.coordinates);
    }
    return this.connection.query(
      `insert into ${agenceManager.table} (${tuples}) values (${values})`,
      keyTable
    );
  }
}

module.exports = agenceManager;
