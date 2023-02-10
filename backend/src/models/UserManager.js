const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, role) values (?,?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.password, user.role]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.role,
        user.id,
      ]
    );
  }

  findByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ? `, [
      email,
    ]);
  }
}

module.exports = UserManager;
