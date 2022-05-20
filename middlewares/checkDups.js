const db = require("../DataSchema/index");
const Host = db.host;
checkDuplicateHost = (req, res, next) => {
  // Username
  console.log("Request", req.body);
  Host.findOne({
    Host_Name: req.body.Host_Name,
    Host_Address: req.body.Host_Address
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed! Host is already in use!" });
      return;
    }
    next();
  });
};

const checkDups = {
    checkDuplicateHost,
};
module.exports = checkDups;