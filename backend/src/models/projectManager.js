const AbstractManager = require("./AbstractManager");

class projectManager extends AbstractManager {
  static table = "project";

  insert(newProject) {
    let tuples = "name";
    let values = "?";
    const keyTable = [newProject.name];

    if (newProject.used_tools) {
      tuples += ", used_tools";
      values += ",?";
      keyTable.push(newProject.used_tools);
    }
    if (newProject.progress_status) {
      tuples += ", progress_status";
      values += ",?";
      keyTable.push(newProject.progress_status);
    }
    if (newProject.description) {
      tuples += ", description";
      values += ",?";
      keyTable.push(newProject.description);
    }
    if (newProject.thematic) {
      tuples += ", thematic";
      values += ",?";
      keyTable.push(newProject.thematic);
    }

    return this.connection.query(
      `insert into ${projectManager.table} (${tuples}) values (${values})`,
      keyTable
    );
  }

  findUserOnProject(id) {
    return this.connection.query(
      `SELECT p.*, up.user_Id, u.firstname, u.lastname, up.role, a.city FROM ${projectManager.table} AS p
      INNER JOIN user_has_project AS up ON p.Id = up.project_Id 
      INNER JOIN user AS u ON up.user_Id = u.Id
      INNER JOIN agence AS a ON u.agence_Id = a.Id
      WHERE p.Id= ?
      `,
      [id]
    );
  }
}

module.exports = projectManager;
