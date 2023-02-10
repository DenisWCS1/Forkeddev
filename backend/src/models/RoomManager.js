const AbstractManager = require("./AbstractManager");

class RoomManager extends AbstractManager {
  constructor() {
    super({ table: "room" });
  }

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
