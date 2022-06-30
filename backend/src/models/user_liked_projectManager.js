const AbstractManager = require("./AbstractManager");

class userLikedProjectManager extends AbstractManager {
  static table = "user_liked_project";

  insert(newProject) {
    const { userId, projectId } = newProject;

    return this.connection.query(
      `insert into ${this.table} (user_Id, project_Id) VALUES (?,?)`,
      [userId, projectId]
    );
  }
}

module.exports = userLikedProjectManager;
