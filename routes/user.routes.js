const { authJwt, checkDupsUser } = require("../middlewares");
const controller = require("../controllers/user.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/user/create",
    [authJwt.verifyToken, checkDupsUser.checkDuplicateUser], controller.createUser)
  app.get("/api/getAllUsers", [authJwt.verifyToken], controller.getAllUsers);
  app.get("/api/getAllUsersNotAssignedToHost", [authJwt.verifyToken], controller.getUsersNotAssignedToHost)
  app.get("/api/user/getAllUsersPerAsthan",[authJwt.verifyToken], controller.getUsersPerAsthan)
  app.get("/api/test/all", controller.allAccess);
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};