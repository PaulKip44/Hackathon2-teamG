const models = require("../models");

class LikeProjectController {
  static browse = (req, res) => {
    models.user_liked_project
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const newUserProject = req.body;
    console.error(newUserProject);

    models.user_liked_project
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
    models.project
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = LikeProjectController;
