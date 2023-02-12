const express = require("express");

const { hashPassword, verifyToken } = require("./controllers/auth");
require("dotenv").config();

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const roomControllers = require("./controllers/roomControllers");
const locationControllers = require("./controllers/locationControllers");
const materialControllers = require("./controllers/materialControllers");
const roomMaterialControllers = require("./controllers/room_materialControllers");
const reservationControllers = require("./controllers/reservationControllers");
const myReservationsControllers = require("./controllers/myReservationsControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);

router.post("/user/login", userControllers.login);

router.post("/user/register", hashPassword, userControllers.register);
router.delete("/user/:id", userControllers.destroy);

router.get("/filtered", roomControllers.filtered);

router.get("/room", verifyToken, roomControllers.browse);
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

router.get("/room_material", roomMaterialControllers.detail);

router.get("/reservation", reservationControllers.browse);
router.get("/reservation/:id", reservationControllers.read);
router.put("/reservation/:id", reservationControllers.edit);
router.post("/reservation", reservationControllers.add);
router.delete("/reservation/:id", reservationControllers.destroy);

router.get("/myReservations", myReservationsControllers.browse);
router.get("/myReservations/:id", myReservationsControllers.read);
router.put("./myReservations/:id", myReservationsControllers.edit);
router.post("/myReservations", myReservationsControllers.add);
router.delete("/myReservations/:id", myReservationsControllers.destroy);

module.exports = router;
