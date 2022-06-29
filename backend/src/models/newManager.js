const AbstractManager = require("./AbstractManager");

class newManager extends AbstractManager {
  static table = "new";

  insert(newNew) {
    const keyTable = [newNew.contents, newNew.creation_date, newNew.project_Id];

    return this.connection.query(
      `insert into ${newManager.table} (contents, creation_date, project_Id) values (?,?,?)`,
      keyTable
    );
  }
}

module.exports = newManager;
