const router = require("express").Router();
const productControllers = require("../controller/productControllers")

router.post("/")
router.get("/",productControllers.product_all)
router.get("/:productId")
router.put("/:productId")
router.delete("/:productId")

module.exports = router