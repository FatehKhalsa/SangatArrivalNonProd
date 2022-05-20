const { checkDups } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/host.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/host/create",
    [
        authJwt.verifyToken, checkDups.checkDuplicateHost
    ],
    controller.createHost
  );
};