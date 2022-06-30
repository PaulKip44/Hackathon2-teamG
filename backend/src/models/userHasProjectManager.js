const AbstractManager = require("./AbstractManager");

class userHasProjectManager extends AbstractManager {
  static table = "user_has_project";

  insert(newProject) {
    const { userId, projectId, role } = newProject;

    return this.connection.query(
      `insert into ${this.table} (user_Id, project_Id, role) VALUES (?,?,?)`,
      [userId, projectId, role]
    );
  }

  findByUserId(userId) {
    return this.connection.query(
      `SELECT user_Id, project_Id, role FROM ${this.table}
      WHERE user_Id = ?`,
      [userId]
    );
  }

  deleteJoinedUser(projectId, userId) {
    return this.connection.query(
      `DELETE FROM ${this.table} WHERE user_Id = ? AND project_Id = ? `,
      [userId, projectId]
    );
  }
}

module.exports = userHasProjectManager;
