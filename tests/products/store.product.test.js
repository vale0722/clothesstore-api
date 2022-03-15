const request = require("supertest");
const app = require("../../src/app");
const { ProductQuery, CategoryQuery } = require("../../src/data-access");

jest.spyOn(ProductQuery, "create").mockImplementation((data) => {
  return {
    name: "Product1",
    description: "Description",
    price: 1000,
    discount: 0.1,
    category: {
      name: "Category1",
      description: "Description",
    },
    images: [
      {
        extension: ".png",
        mime_type: "image/png",
      },
      {
        extension: ".png",
        mime_type: "image/png",
      },
    ],
  };
});

jest.spyOn(CategoryQuery, "show").mockImplementation((data) => {
  return Promise.resolve({
    id: data,
  });
});

jest.spyOn(ProductQuery, "findByName").mockImplementation(() => {
  return Promise.resolve(null);
});

const errors = [
  {
    name: "Product1",
    price: 1000,
    discount: 0.1,
    category_id: 1,
    image_front: null,
    image_back: null,
  },
  {
    name: "Product1",
    description: "Description",
    discount: 0.1,
    category_id: 1,
    image_front: null,
    image_back: null,
  },
  {
    name: "Product1",
    description: "Description",
    image_front: null,
    image_back: null,
  },
];

describe("Store Product", () => {
  it("should create a new product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "Product1",
      description: "Description",
      price: 1000,
      discount: 0.1,
      category_id: 1,
      image_front: null,
      image_back: null,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("product");
    expect(res.body.product).toEqual(
      expect.objectContaining({
        name: "Product1",
        description: "Description",
        price: 1000,
        discount: 0.1,
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

  it("should not create a new product when name exist", async () => {
    jest.spyOn(ProductQuery, "findByName").mockImplementation((data) => {
      return Promise.resolve({ name: data });
    });

    const res = await request(app).post("/api/products").send({
      name: "Product1",
      description: "Description",
      price: 1000,
      discount: 0.1,
      category_id: 1,
      image_front: null,
      image_back: null,
    });

    expect(res.statusCode).toEqual(402);
  });

  it.each(errors)(
    "should not create a new product with errors",
    async (req) => {
      const res = await request(app).post("/api/products").send({ req });

      expect(res.statusCode).toEqual(402);
    }
  );
});
