const db = require("../models/index");

exports.createTinyUrl = async (req, res, next) => {
  try {
    const tinyUrl = await db.Url.create(req.body);
    console.log(req.body);
    console.log(tinyUrl);
    res.status(201).json(tinyUrl);
  } catch (error) {
    next(error);
  }
};

exports.getTinyUrls = async (req, res, next) => {
  try {
    const tinyUrl = await db.Url.findAll({ include: "group" });
    res.status(201).json(tinyUrl);
  } catch (error) {
    next(error);
  }
};

exports.deleteTinyUrl = async (req, res, next) => {
  try {
    const deleted = await db.Url.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deleted) {
      return res.status(201).json({ success: true });
    }
    throw new Error("Url not found");
  } catch (error) {
    next(error);
  }
};
