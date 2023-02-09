const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const roomControllers = require("./controllers/roomControllers");
const locationControllers = require("./controllers/locationControllers");
const materialControllers = require("./controllers/materialControllers");
const reservationControllers = require("./controllers/reservationControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.post("/user/login", userControllers.addLogin);
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

router.get("/reservation", reservationControllers.browse);
router.get("/reservation/:id", reservationControllers.read);
router.put("/reservation/:id", reservationControllers.edit);
router.post("/reservation", reservationControllers.add);
router.delete("/reservation/:id", reservationControllers.destroy);

module.exports = router;
