const AbstractManager = require("./AbstractManager");

class userLikedProjectManager extends AbstractManager {
  static table = "user_liked_project";

  findByUserId(userId) {
    return this.connection.query(
      `SELECT project_Id FROM ${this.table}
      WHERE user_id = ?`,
      [userId]
    );
  }

  insert(newProject) {
    const { userId, projectId } = newProject;

    return this.connection.query(
      `insert into ${this.table} (user_Id, project_Id) VALUES (?,?)`,
      [userId, projectId]
    );
  }

  unlike(userId, projectId) {
    return this.connection.query(
      `DELETE FROM ${this.table} WHERE user_Id = ? AND project_Id = ?`,
      [userId, projectId]
    );
  }
}

module.exports = userLikedProjectManager;
