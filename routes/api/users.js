const express = require("express");
const router = express.Router();
const passport = require("passport");
const usersApi = require("../../controllers/api/users_api");

router.post("/register", usersApi.create);
router.post("/login", usersApi.create_session);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  usersApi.profile
);
module.exports = router;
