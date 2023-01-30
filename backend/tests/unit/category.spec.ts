import { test } from "@japa/runner";
import Category from "App/Models/Company/Category";
import { CategoryFactory } from "Database/factories";

test.group("Category", () => {
  test("make", async ({ assert }) => {
    const category = await CategoryFactory.make();

    assert.instanceOf(category, Category);
  });

  test("create", async ({ assert }) => {
    const category = await CategoryFactory.with("industry").create();

    assert.properties(category, ["industryId", "name"]);
  });

  test("belongs to industry", async ({ assert }) => {
    const category = await CategoryFactory.with("industry").create();

    assert.instanceOf(category, Category);
  });

  test("has many companies", async ({ assert }) => {
    const category = await CategoryFactory.with("companies").create();

    assert.isArray(category.companies);
  });
});
