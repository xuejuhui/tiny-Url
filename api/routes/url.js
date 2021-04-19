const router = require("express").Router();

const {
  createTinyUrl,
  getTinyUrls,
  deleteTinyUrl,
  getTinyUrl,
  updateTinyUrl,
  addTinyUrlCounter,
} = require("../controllers/urlController");

router.post("/urls", createTinyUrl);

router.get("/urls", getTinyUrls);

router.get("/urls/:shortUrl", getTinyUrl);

router.delete("/urls/:id", deleteTinyUrl);

router.patch("/urls/:id", updateTinyUrl);

router.patch("/urls/:id/count", addTinyUrlCounter);

module.exports = router;
