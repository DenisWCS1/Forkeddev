const models = require("../models");

const add = (req, res) => {
  const inscription = req.body;

  // TODO validations (length, format...)

  models.inscription
    .insert(inscription)
    .then(([result]) => {
      res.location(`/sign_up/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const inscription = req.body;

  // TODO validations (length, format...)

  inscription.id = parseInt(req.params.id, 10);

  models.inscription
    .update(inscription)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  edit,
};
