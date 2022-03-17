const request = require("supertest");
const app = require("../../src/app");
const { ProductQuery, ProductViewQuery } = require("../../src/data-access");

jest.spyOn(ProductQuery, "show").mockImplementation(() => {
  return {
    id: 1,
    name: "Product1",
    description: "Description",
    price: 1000,
    discount: 0.1,
    images: [
      {
        product_id: 1,
        extension: ".png",
        mime_type: "image/png",
      },
      {
        product_id: 1,
        extension: ".png",
        mime_type: "image/png",
      },
    ],
  };
});

jest.spyOn(ProductViewQuery, "create").mockImplementation(() => {
  return {
    id: 1,
    product_id: 1,
    browser: "",
    ip: "127.0.0.1",
  };
});

describe("Show a Product", () => {
  it("should show a Product", async () => {
    const res = await request(app).get("/api/products/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("product");
    expect(res.body.product).toEqual(
      expect.objectContaining({
        name: "Product1",
        description: "Description",
        price: 1000,
        discount: 0.1,
        total: 900,
        images: [
          {
            extension: ".png",
            mimeType: "image/png",
          },
          {
            extension: ".png",
            mimeType: "image/png",
          },
        ],
      })
    );
  });
});
