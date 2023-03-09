const router = require("express").Router();

router.get('/', (req, res) => {
    res.send("create");
})

module.exports = router;