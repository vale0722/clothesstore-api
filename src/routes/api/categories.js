const { CategoryController } = require("../../controllers");
const router = require("express").Router();
const StoreCategoryRequest = require("../../requests/category.request");

router.get("/", CategoryController.index);
router.post("/", ...StoreCategoryRequest.store, CategoryController.store);
router.put("/:id", ...StoreCategoryRequest.store, CategoryController.update);

module.exports = router;
