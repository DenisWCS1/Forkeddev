const AbstractManager = require("./AbstractManager");

class RoomManager extends AbstractManager {
  constructor() {
    super({ table: "room" });
  }

  filter(start, end, location) {
    const sqlvalues = [];
    const sql = ` SELECT room.id,  room.name, room.plan, room.url_picture, location.city_name FROM ${
      this.table
    }
        LEFT JOIN location ON room.fk_location = location.id 
       WHERE  ${location !== null ? "location.id = ? and" : ""}
        room.id NOT IN(
            SELECT room.id FROM room 
            INNER JOIN reservation as r
            ON room.id = r.fk_room  where 
            (r.start_datetime  BETWEEN STR_TO_DATE(?, "%d-%m-%Y %H:%i:%s") AND STR_TO_DATE(?, "%d-%m-%Y %H:%i:%s")) AND
            (r.end_datetime  BETWEEN STR_TO_DATE(?, "%d-%m-%Y %H:%i:%s") AND STR_TO_DATE(?, "%d-%m-%Y %H:%i:%s"))
            GROUP BY room.id)
          order by room.id asc`;

    if (location !== null) {
      sqlvalues.push(location, start, end, start, end);
    } else {
      sqlvalues.push(start, end, start, end);
    }

    return this.database.query(sql, sqlvalues);

  insert(room) {
    return this.database.query(
      `insert into ${this.table} (capacity, name, plan, url_picture, updated_on, created_on) values (?,?,?,?,?,?)`,
      [
        room.capacity,
        room.name,
        room.plan,
        room.url_picture,
        room.updated_on,
        room.created_on,
      ]
    );
  }

  update(room) {
    return this.database.query(
      `update ${this.table} set capacity = ? set name = ? set plan = ? set url_picture = ? set updated_on = ? where id = ?`,
      [
        room.capacity,
        room.name,
        room.plan,
        room.url_picture,
        room.updated_on,
        room.id,
      ]
    );

  }
}

module.exports = RoomManager;
