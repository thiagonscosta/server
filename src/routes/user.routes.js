const express = require("express");
const { registerUser, authUser } = require("../controllers/user.controller");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware");

router.post("/", registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
