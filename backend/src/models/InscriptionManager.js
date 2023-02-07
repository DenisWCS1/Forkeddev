// const AbstractManager = require("./AbstractManager");

// class InscriptionManager extends AbstractManager {
//   constructor() {
//     super({ table: "user" });
//   }

//   insert(user) {
//     return this.database.query(
//       `insert into ${this.table} (firstname, lastname, email, password, role) values (?,?,?,?,?)`,
//       [user.firstname, user.lastname, user.email, user.password, "user"]
//     );
//   }
// }

// module.exports = InscriptionManager;

const AbstractManager = require("./AbstractManager");

class InscriptionManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.findByEmail(user.email)
      .then((result) => {
        if (result.length > 0) {
          return Promise.reject(error);
        }
        return this.database.query(
          `insert into ${this.table} (firstname, lastname, email, password, role) values (?,?,?,?,?) `,
          [user.firstname, user.lastname, user.email, user.password, "user"]
        );
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  findByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ? `, [
      email,
    ]);
  }
}

module.exports = InscriptionManager;
