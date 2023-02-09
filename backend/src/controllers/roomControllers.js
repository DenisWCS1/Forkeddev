// this is the controller file
const moment = require("moment");
const models = require("../models");

const browse = (req, res) => {
  models.room
    .findAll()
    .then(([rows]) => {
      // with this line , i throw a response to the client
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.room
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const room = req.body;

  // TODO validations (length, format...)

  room.id = parseInt(req.params.id, 10);

  models.room
    .update(room)
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

const add = (req, res) => {
  const room = req.body;

  // TODO validations (length, format...)

  models.room
    .insert(room)
    .then(([result]) => {
      res.location(`/room/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.room
    .delete(req.params.id)
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
}; /*
// WIP here
const filtered = (req, res) => {
  console.log(req.query.start);
  const { start, end, format } = req.query;
  // const formatDateStart = `'${Date.parse(start)}', '${format}'`;
  // const formatDateEnd = `'${Date.parse(end)}', '${format}'`;
  const formatDateStart = `concat(08, "-", 02, "-", 23), "%d-%m-%Y %H:%i:%s"`;
  const formatDateEnd = `concat(08, "-", 03, "-", 23), "%d-%m-%Y %H:%i:%s"`;
  console.log("start date", formatDateStart, "end date", formatDateEnd);

  const location = parseInt(req.query.location);
  console.log("start ", formatDateStart, "end ", formatDateEnd);
  models.room
    .filter(start, end)
    .then(([rows]) => {
      console.log(rows);
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.send(500);
    });
}; */
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  // filtered,
};
