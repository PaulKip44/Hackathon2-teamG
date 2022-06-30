const AbstractManager = require("./AbstractManager");

// eslint-disable-next-line camelcase
class user_liked_projectManager extends AbstractManager {
  static table = "user_liked_project";

  insert(newProject) {
    const { userId, projectId } = newProject;

    return this.connection.query(
      `insert into ${this.table} (user_Id, project_Id) VALUES (?,?)`,
      [userId, projectId]
    );
  }
}

// eslint-disable-next-line camelcase
module.exports = user_liked_projectManager;
