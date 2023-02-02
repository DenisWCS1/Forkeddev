const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const roomControllers = require("./controllers/roomControllers");
const locationControllers = require("./controllers/locationControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
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

module.exports = router;
