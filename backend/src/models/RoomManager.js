const AbstractManager = require("./AbstractManager");

class RoomManager extends AbstractManager {
  constructor() {
    super({ table: "room" });
  }

  insert(room) {
    return this.database.query(
      `insert into ${this.table} (name, plan, url_picture, updated_on, created_on) values (?,?,?,?,?)`,
      [room.name, room.plan, room.url_picture, room.updated_on, room.created_on]
    );
  }

  update(room) {
    return this.database.query(
      `update ${this.table} set name = ? set plan = ? set url_picture = ? set updated_on = ? where id = ?`,
      [room.name, room.plan, room.url_picture, room.updated_on, room.id]
    );
  }
  /*
  // WIP here
  filter(start, end) {
    const sqlvalue = [];
    const sql = ` SELECT room.id,  room.name, room.plan, room.url_picture FROM room 
    LEFT JOIN location
          ON room.fk_location = location.id
          where room.id NOT IN(
            SELECT room.id FROM room 
            INNER JOIN reservation 
            ON room.id = reservation.fk_room  where 
            (reservation.start_datetime  BETWEEN STR_TO_DATE(?, "%d-%m-%Y %H:%i:%s") AND STR_TO_DATE(?, "%d-%m-%Y %H:%i:%s")) AND
            (reservation.end_datetime  BETWEEN STR_TO_DATE(?, "%d-%m-%Y %H:%i:%s") AND STR_TO_DATE(?, "%d-%m-%Y %H:%i:%s"))
            GROUP BY room.id)
          order by room.name asc`;
    sqlvalue.push(start, end, start, end);

    return this.database.query(sql, sqlvalue);
  } */
}

module.exports = RoomManager;
