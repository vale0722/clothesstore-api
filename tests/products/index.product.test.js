const request = require("supertest");
const app = require("../../src/app");
const { ProductQuery } = require("../../src/data-access");

jest.spyOn(ProductQuery, "index").mockImplementation(() => {
  return [
    {
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
    },
    {
      name: "Product2",
      description: "Description",
      price: 2000,
      discount: 0.1,
      images: [
        {
          product_id: 2,
          extension: ".png",
          mime_type: "image/png",
        },
        {
          product_id: 2,
          extension: ".png",
          mime_type: "image/png",
        },
      ],
    },
  ];
});

describe("Index Product", () => {
  it("should fetch all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("products");
    expect(res.body.products).toHaveLength(2);
    expect(res.body.products[0].images).toHaveLength(2);
  });
});
