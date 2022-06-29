const { decodeJwt } = require("../helpers/jwtHelper");

const authorization = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = decodeJwt(token);
    req.userId = data.id;
    req.userName = data.name;
    return next();
  } catch {
    res.sendStatus(401);
  }
  return console.warn("Everything is ok");
};

module.exports = authorization;
