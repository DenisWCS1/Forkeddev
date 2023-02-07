const models = require("../models");

const add = (req, res) => {
  const inscription = req.body;

  // TODO validations (length, format...)

  models.inscription
    .insert(inscription)
    .then(([result]) => {
      res.location(`/user/signup/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
