const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

// only admin can access the router
router.get("/admin", verifyToken, (req,res) => {
    res.json({ message : "welcome admin"});
});
// only maanger can access the router
router.get("/manager", (req,res) => {
    res.json({ message : "welcome manager"});
});


router.get("/employee", (req,res) => {
    res.json({ message : "welcome employee"});
});

module.exports = router;