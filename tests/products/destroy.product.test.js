const request = require("supertest");
const app = require("../../src/app");
const { ProductQuery } = require("../../src/data-access");

jest.spyOn(ProductQuery, "destroy").mockImplementation(() => {
  return true;
});

jest.spyOn(ProductQuery, "show").mockImplementation(() => {
  return true;
});

describe("Destroy Product", () => {
  it("should destroy a product", async () => {
    const res = await request(app).delete("/api/products/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Producto eliminado exítosamente");
  });
});
