const request = require("supertest");
const app = require("../../src/app");
const { CategoryQuery } = require("../../src/data-access");

const bucket = require("../../src/infrastructure/storage/bucket");

jest.spyOn(CategoryQuery, "index").mockImplementation(() => {
  return [
    {
      name: "Category1",
      description: "Description",
    },
    {
      name: "Category2",
      description: "Description",
    },
    {
      name: "Category3",
      description: "Description",
    },
  ];
});

describe("Index Category", () => {
  it("should fetch all categories", async () => {
    const res = await request(app).get("/api/categories");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("categories");
    expect(res.body.categories).toHaveLength(3);
  });
});
