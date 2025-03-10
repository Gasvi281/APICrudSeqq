const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");

router.get("/", usuarioController.getUsers);
router.post("/addUser", usuarioController.addUser);
router.post("/:id", usuarioController.updateUser);
router.post("/ChangeStatus/:id", usuarioController.changeUserStatus);

module.exports = router;