// this is the controller file
const models = require("../models");

const detail = (req, res) => {
  models.room_material
    .roomdetails()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  detail,
};
