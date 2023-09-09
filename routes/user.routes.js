const { authJwt, checkDupsUser } = require("../middlewares");
const controller = require("../controllers/user.controller");
const pendingController = require("../controllers/user_pending.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/getPendingUsers", [authJwt.verifyToken], pendingController.getAllUsers);
  app.post(
    "/api/pendingUser/create",
    [checkDupsUser.checkDuplicateUser], pendingController.createUser)
    app.put(
      "/api/pendingUser/update",
       pendingController.updateUser)


  app.post(
    "/api/user/create",
    [authJwt.verifyToken, checkDupsUser.checkDuplicateUser], controller.createUser)
    app.put(
      "/api/user/update",
      [authJwt.verifyToken], controller.updateUser)
  app.get("/api/deleteUsersFlightInfo", [authJwt.verifyToken], controller.deleteFlightInfo);
  app.get("/api/getAllUsers", [authJwt.verifyToken], controller.getAllUsers);
  app.get("/api/getPendingUsers", [authJwt.verifyToken], controller.getPendingUsers);
  app.get("/api/getUsersWithFlightInfo", [authJwt.verifyToken], controller.getArrivalReportUsers);
  app.get("/api/getAllUsersNotAssignedToHost", [authJwt.verifyToken], controller.getUsersNotAssignedToHost)
  app.get("/api/user/getAllUsersPerAsthan",[authJwt.verifyToken], controller.getUsersPerAsthan)
  app.get("/api/findTravelInfo", controller.findTravelInfo)
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