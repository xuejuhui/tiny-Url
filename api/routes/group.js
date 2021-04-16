const router = require("express").Router();

const {
  createGroup,
  getGroups,
  deleteGroup,
} = require("../controllers/groupController");

router.post("/groups", createGroup);

router.get("/groups", getGroups);

router.delete("/groups/:id", deleteGroup);

module.exports = router;
