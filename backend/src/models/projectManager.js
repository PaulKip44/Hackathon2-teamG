const AbstractManager = require("./AbstractManager");

class projectManager extends AbstractManager {
  static table = "project";

  insert(newProject) {
    let tuples = "name,";
    let values = "?,";
    const keyTable = [newProject.name];

    if (newProject.used_toolsy) {
      tuples += ", used_toolsy";
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
    console.error(newProject, tuples, values, keyTable);
    return this.connection.query(
      `insert into ${projectManager.table} (${tuples}) values (${values})`,
      keyTable
    );
  }
}

module.exports = projectManager;
