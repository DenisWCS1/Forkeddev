const express = require("express");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./controllers/auth");
require("dotenv").config();

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const roomControllers = require("./controllers/roomControllers");
const locationControllers = require("./controllers/locationControllers");
const materialControllers = require("./controllers/materialControllers");
// const inscriptionControllers = require("./controllers/inscriptionControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);

// router.post("/user/login", hashPassword, userControllers.addLogin);
router.post("/user/login", userControllers.login, verifyPassword);

router.post("/user/register", userControllers.register);
router.delete("/user/:id", userControllers.destroy);

router.get("/room", roomControllers.browse);
router.get("/room/:id", roomControllers.read);
router.put("/room/:id", roomControllers.edit);
router.post("/room", roomControllers.add);
router.delete("/room/:id", roomControllers.destroy);

router.get("/location", locationControllers.browse);
router.get("/location/:id", locationControllers.read);
router.put("/location/:id", locationControllers.edit);
router.post("/location", locationControllers.add);
router.delete("/location/:id", locationControllers.destroy);

router.get("/material", materialControllers.browse);
router.get("/material/:id", materialControllers.read);
router.put("/material/:id", materialControllers.edit);
router.post("/material", materialControllers.add);
router.delete("/material/:id", materialControllers.destroy);

// router.post("/user/signup", inscriptionControllers.add);
// router.use(verifyToken);

module.exports = router;
