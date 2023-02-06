const AbstractManager = require("./AbstractManager");

class InscriptionManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password) values (?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.password]
    );
  }
}

module.exports = InscriptionManager;

// const express = require("express");
// const argon2 = require("argon2");

// const app = express();

// const userTable = [
//   {
//     id: 1,
//     email: "user1@example.com",
//     password:
//       "$argon2i$v=19$m=4096,t=3,p=1$zI6GH2e9X/U6/Lj6fZU/1g$f5jKH5S5d+OfyBvGnLjm4LR4eH01l+Z0gAfZVUOIzwI",
//   },
//   {
//     id: 2,
//     email: "user2@example.com",
//     password:
//       "$argon2i$v=19$m=4096,t=3,p=1$XeQ4aFzD5EZib0i7PtoQ2Q$m8W/cjnHVl9iBt1UnLjm4LR4eH01l+Z0gAfZVUOIzwI",
//   },
// ];

// // Middleware pour filtrer les utilisateurs inscrits
// const filterUsers = (req, res, next) => {
//   const { email, password } = req.body;
//   const user = userTable.find((user) => user.email === email);

//   if (!user) {
//     return res.status(401).json({ message: "Mot de passe ou login incorrect(s)" });
//   }

//   argon2
//     .verify(user.password, password)
//     .then((match) => {
//       if (match) {
//         req.user = user;
//         next();
//       } else {
//         res.status(401).json({ message: "Mot de passe ou login incorrect(s)" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Erreur interne" });
//     });
// };

// // Route pour vérifier si l'e-mail est déjà utilisé
// app.post("/user/check-email", (req, res) => {
//   const { email } = req.body;
//   const emailExists = userTable.some((user) => user.email === email);

//   if (emailExists) {
//     return res.status(400).json({ message: "E-mail déjà utilisé" });
//   }

//   res.json({ message: "E-mail disponible" });
// });

// // Route protégée par le middleware
// app.post("/user", filterUsers, (req, res) => {
//   res.json({ message: `Bienvenue ${req.user.email}` });
// });

// app.listen(3000, () => {
//   console.info(`Serveur en cours d'exécution sur le port 3000`);
// });
