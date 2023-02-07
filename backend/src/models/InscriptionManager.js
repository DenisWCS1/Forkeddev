const AbstractManager = require("./AbstractManager");

class InscriptionManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, role) values (?,?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.password, "user"]
    );
  }
}

module.exports = InscriptionManager;
