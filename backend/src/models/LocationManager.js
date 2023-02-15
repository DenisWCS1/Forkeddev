const AbstractManager = require("./AbstractManager");

class LocationManager extends AbstractManager {
  constructor() {
    super({ table: "location" });
  }

  insert(location) {
    return this.database.query(
      `insert into ${this.table} (id, city_name) values (?,?)`,
      [location.city_name]
    );
  }

  update(location) {
    return this.database.query(
      `update ${this.table} set city_name = ? where id = ?`,
      [location.city_name, location.id]
    );
  }
}

module.exports = LocationManager;
