const request = require("supertest");
const app = require("../../src/app");
const { CategoryQuery } = require("../../src/data-access");

jest.spyOn(CategoryQuery, "update").mockImplementation((model, data) => {
  return {
    name: data.name,
    description: data.description,
  };
});

jest.spyOn(CategoryQuery, "show").mockImplementation((data) => {
  return {
    name: "Category1",
    id: 1,
  };
});

jest.spyOn(CategoryQuery, "findByName").mockImplementation((data) => {
  return Promise.resolve({
    name: data,
    id: 1,
  });
});

const errors = [
  {
    name: "CategoryCustom",
  },
  {
    description: "Hi! im a Category",
  },
];

describe("Update Category", () => {
  it("should update a category", async () => {
    const res = await request(app).put("/api/categories/1").send({
      name: "CategoryCustom2",
      description: "Hi! im a Category3",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("category");
    expect(res.body.category).toEqual(
      expect.objectContaining({
        description: "Hi! im a Category3",
        name: "CategoryCustom2",
      })
    );
  });

  it("should not update a category when name exist", async () => {
    jest.spyOn(CategoryQuery, "findByName").mockImplementation((data) => {
      return Promise.resolve({ id: 2, name: data });
    });

    const res = await request(app).put("/api/categories/1").send({
      name: "CategoryCustom3",
      description: "Hi! im a Category",
    });

    expect(res.statusCode).toEqual(402);
    expect(res.body.error).toEqual({
      errors: [
        {
          location: "body",
          msg: "El nombre ya está en uso",
          param: "name",
          value: "CategoryCustom3",
        },
      ],
    });
  });

  it.each(errors)(
    "should not create a new category with errors",
    async (req) => {
      const res = await request(app).post("/api/categories").send({ req });

      expect(res.statusCode).toEqual(402);
    }
  );
});
