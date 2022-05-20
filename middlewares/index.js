const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const checkDups = require("./checkDups");
const checkDupsUser = require("./checkUserDups");
module.exports = {
  authJwt,
  verifySignUp,
  checkDups,
  checkDupsUser
};