const router = require("express").Router();

const {
  createTinyUrl,
  getTinyUrls,
  deleteTinyUrl,
} = require("../controllers/urlController");

router.post("/urls", createTinyUrl);

router.get("/urls", getTinyUrls);

router.delete("/urls/:id", deleteTinyUrl);

module.exports = router;
