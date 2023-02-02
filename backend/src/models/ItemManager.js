const AbstractManager = require("./AbstractManager");
// ici changer le table par le nom de la table à interroger 
class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  insert(item) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      item.title,
    ]);
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ItemManager;
