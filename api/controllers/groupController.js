const db = require("../models/index");

exports.createGroup = async (req, res, next) => {
  try {
    const tinyUrl = await db.Group.create(req.body);
    res.status(201).json(tinyUrl);
  } catch (error) {
    next(error);
  }
};

exports.getGroups = async (req, res, next) => {
  try {
    const tinyUrl = await db.Group.findAll({ include: "urls" });
    console.log(tinyUrl);
    res.status(201).json(tinyUrl);
  } catch (error) {
    next(error);
  }
};

exports.deleteGroup = async (req, res, next) => {
  try {
    const deleted = await db.Group.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deleted) {
      return res.status(201).json({ success: true });
    }
    throw new Error("Group not found");
  } catch (error) {
    next(error);
  }
};
