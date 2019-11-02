const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

router.route("/")
  .get(UsersController.get)
  .post(UsersController.post);
module.exports = router;