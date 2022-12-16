const express = require("express");
const {accountController} = require("../controllers");

const router = express.Router();

router.get("/", accountController.getAccount);
router.post("/", accountController.createAccount);

module.exports = router;
