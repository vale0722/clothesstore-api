const request = require("supertest");
const app = require("../../src/app");
const { CategoryQuery } = require("../../src/data-access");

jest.spyOn(CategoryQuery, "create").mockImplementation((data) => {
  return {
    name: data.name,
    description: data.description,
  };
});
jest.spyOn(CategoryQuery, "findByName").mockImplementation(() => {
  return Promise.resolve(null);
});

const errors = [
  {
    name: "CategoryCustom",
  },
  {
    description: "Hi! im a Category",
  },
];

describe("Store Category", () => {
  it("should create a new category", async () => {
    const res = await request(app).post("/api/categories").send({
      name: "CategoryCustom",
      description: "Hi! im a Category",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("category");
    expect(res.body.category).toEqual(
      expect.objectContaining({
        description: "Hi! im a Category",
        name: "CategoryCustom",
      })
    );
  });

  it("should not create a new category when name exist", async () => {
    jest.spyOn(CategoryQuery, "findByName").mockImplementation((data) => {
      return Promise.resolve({ name: data });
    });

    const res = await request(app).post("/api/categories").send({
      name: "CategoryCustom",
      description: "Hi! im a Category",
    });

    expect(res.statusCode).toEqual(402);
  });

  it.each(errors)(
    "should not create a new category with errors",
    async (req) => {
      const res = await request(app).post("/api/categories").send({ req });

      expect(res.statusCode).toEqual(402);
    }
  );
});
