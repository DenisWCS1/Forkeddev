const AbstractManager = require("./AbstractManager");

class LocationManager extends AbstractManager {
  constructor() {
    super({ table: "location" });
  }

  insert(location) {
    return this.database.query(
      `insert into ${this.table} (id, city_name, updated_on, created_on) values (?,?,?,?)`,
      [location.city_name, location.updated_on, location.created_on]
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
