const models = require("../models");

exports.login = (req, res) => {
  const { email, password } = req.body;

  models.user.findByUserEmailPassword(email, password).then((user) => {
    if (!user) {
      res.status(401).send("Invalid credentials");
    } else {
      res.status(200).send("Good !!!");
    }
  });
};
