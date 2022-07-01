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

  findByUser(userId) {
    return this.connection.query(
      `SELECT n.* FROM ${this.table} AS n INNER JOIN user_has_project AS up ON n.project_Id = up.project_Id WHERE up.user_Id = ?`,
      [userId]
    );
  }
}

module.exports = newManager;
