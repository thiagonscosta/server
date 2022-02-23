const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware");

router.post("/").post(protect, accessChat);
router.post("/group").get(protect, createGroupChat);
router.post("/rename").post(protect, renameGroup);
router.post("/groupremove").post(protect, removeFromGroup);
router.post("/groupadd").post(protect, addToChat);

module.exports = router;
