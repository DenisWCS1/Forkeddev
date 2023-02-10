const AbstractManager = require("./AbstractManager");

class MyReservationsManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  findmy(id) {
    return this.database.query(
      `select user.firstname, user.lastname, room.name, start_datetime, end_datetime 
      FROM ${this.table} 
      INNER JOIN room ON room.id = fk_room 
      INNER JOIN user ON user.id = fk_user
      WHERE fk_user = ?`,

      [id]
    );
  }

  delete(id) {
    return this.database.query(`delete ${this.table} set where id = ?`, [id]);
  }
}

module.exports = MyReservationsManager;
