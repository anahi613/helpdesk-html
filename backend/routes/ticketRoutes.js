const express = require("express");

const router = express.Router();

const controller = require("../controllers/ticketController");


router.get("/", controller.listarTickets);

router.get("/:id", controller.buscarTicket);

router.post("/", controller.registrarTicket);

router.put("/:id", controller.modificarTicket);

router.delete("/:id", controller.borrarTicket);


module.exports = router;