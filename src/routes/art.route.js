const express = require("express");
const router = express.Router();
const artController = require("../controllers/art.controller");

/* GET programming languages. */
router.get("/", artController.get);

module.exports = router;
