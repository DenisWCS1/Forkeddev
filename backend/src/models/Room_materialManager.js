const AbstractManager = require("./AbstractManager");

class RoomMaterialManager extends AbstractManager {
  constructor() {
    super({ table: "room_material" });
  }

  roomdetails() {
    return this.database
      .query(`SELECT room_material.fk_room, room_material.fk_material, room.name as roomName, material.name, url_picture
    FROM ${this.table}
    INNER JOIN room ON room.id = fk_room
    INNER JOIN material ON material.id = fk_material`);
  }
}

module.exports = RoomMaterialManager;
