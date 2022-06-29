const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  find() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = ProjectManager;
