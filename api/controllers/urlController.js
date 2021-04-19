const db = require("../models/index");

exports.createTinyUrl = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await db.sequelize.transaction(async (transaction) => {
      const tinyUrl = await db.Url.create(req.body, {
        transaction,
      });

      return tinyUrl;
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getTinyUrls = async (req, res, next) => {
  try {
    const tinyUrls = await db.Url.findAll({
      where: { groupId: null },
    });
    res.status(201).json(tinyUrls);
  } catch (error) {
    next(error);
  }
};

exports.getTinyUrl = async (req, res, next) => {
  try {
    const { shortUrl } = req.params;
    const tinyUrl = await db.Url.findOne({
      where: { shortUrl },
    });
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

exports.updateTinyUrl = async (req, res, next) => {
  try {
    const { groupId } = req.body;
    const { id } = req.params;

    const result = await db.sequelize.transaction(async (transaction) => {
      const updated = await db.Url.update(
        { groupId },
        { transaction, where: { id } }
      );
      return updated;
    });
    if (result) {
      return res.status(201).json({ success: true });
    }
    throw new Error("Url not found");
  } catch (error) {
    next(error);
  }
};

exports.addTinyUrlCounter = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.sequelize.transaction(async (transaction) => {
      const updated = await db.Url.increment(
        { counter: +1 },
        { where: { id }, transaction }
      );
      return updated;
    });
    if (result) {
      return res.status(201).json({ success: true });
    }
    throw new Error("Url not found");
  } catch (error) {
    next(error);
  }
};
