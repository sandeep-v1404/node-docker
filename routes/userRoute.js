const express = require("express")
const authController = require("../controllers/authController")
const router = express.Router()

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.delete("/:id", authController.deleteUser);
router.get("/", authController.getAllUsers);

module.exports = router;