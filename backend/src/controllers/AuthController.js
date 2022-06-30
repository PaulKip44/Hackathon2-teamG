const models = require("../models");
const { encodeJwt } = require("../helpers/jwtHelper");

exports.login = (req, res) => {
  const { email, password } = req.body;

  models.user.findByUserEmailPassword(email, password).then((user) => {
    if (!user) {
      res.status(401).send("Invalid credentials");
    } else {
      // eslint-disable-next-line no-param-reassign
      delete user.password;
      const token = encodeJwt(user);

      res.cookie("token", token, { httpOnly: true, secure: false });
      res.status(200).json({ username: user.firstname });
    }
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token").sendStatus(200);
};
