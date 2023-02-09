// const models = require("../models");

// const add = (req, res) => {
//   const inscription = req.body;

//   // TODO validations (length, format...)

//   models.inscription
//     .insert(inscription)
//     .then(([result]) => {
//       res.location(`/user/signup/${result.insertId}`).sendStatus(201);
//     })
//     .catch(() => {
//       res.status(401).send("Email déjà enregistré");
//     });
// };

// module.exports = {
//   add,
// };
