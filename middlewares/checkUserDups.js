const db = require("../DataSchema/index");
const User = db.user;
checkDuplicateUser = (req, res, next) => {
  // Username
  User.findOne({
    user_firstName: req.body.user_firstName,
    user_lastName: req.body.user_lastName,
    user_yearOfBirth: req.body.user_yearOfBirth,
    user_goingToAsthan: req.body.user_goingToAsthan,
}).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed! User is already in System!" });
      return;
    }
    next();
  });
};

const checkDupsUser = {
    checkDuplicateUser,
};
module.exports = checkDupsUser;