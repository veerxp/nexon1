const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const router = express.Router();

// only admin can access the router
router.get("/admin", verifyToken, authorizeRoles("admin"), (req,res) => {
    res.json({ message : "welcome admin"});
});
// only maanger can access the router
router.get("/manager", verifyToken, authorizeRoles("admin","manager"), (req,res) => {
    res.json({ message : "welcome manager"});
});

//All can acceess this
router.get("/employee", verifyToken, authorizeRoles("admin","manager","employee"), (req,res) => {
    res.json({ message : "welcome employee"});
});

module.exports = router;