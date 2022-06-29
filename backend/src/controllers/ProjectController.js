const models = require("../models");

class ProjectController {
  static browse = (req, res) => {
    models.project
      .find()
      .then(([rows]) => {
        console.error(rows);
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectController;
