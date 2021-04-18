const router = require("express").Router();

const {
  createTinyUrl,
  getTinyUrls,
  deleteTinyUrl,
  getTinyUrl,
  updateTinyUrl,
} = require("../controllers/urlController");

router.post("/urls", createTinyUrl);

router.get("/urls", getTinyUrls);

router.get("/urls/:shortUrl", getTinyUrl);

router.delete("/urls/:id", deleteTinyUrl);

router.patch("/urls/:id", updateTinyUrl);

module.exports = router;
