const {
  ProductController,
  ProductViewController,
} = require("../../controllers");
const router = require("express").Router();

const StoreProductRequest = require("../../requests/product.request");
router.get("/", ProductController.index);
router.get("/more-search", ProductViewController.index);
router.post("/", ...StoreProductRequest.store, ProductController.store);
router.delete("/:id", ProductController.destroy);
router.get("/:id", ProductController.show);

module.exports = router;
