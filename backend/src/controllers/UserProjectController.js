const models = require("../models");

class UserProjectController {
  static add = (req, res) => {
    const newUserProject = req.body;
    console.error(newUserProject);

    models.user_has_project
      .insert(newUserProject)
      .then(([result]) => {
        res.status(201).send({ ...newUserProject, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.user_has_project
      .deleteJoinedUser(req.params.projectId, req.params.userId)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browse = (req, res) => {
    models.user_has_project
      .findByUserId(req.params.userId)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserProjectController;
