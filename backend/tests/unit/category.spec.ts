import { test } from "@japa/runner";
import Category from "App/Models/Category";
import { CategoryFactory } from "Database/factories";

test.group("Category", () => {
  test("make", async ({ assert }) => {
    const category = await CategoryFactory.make();

    assert.instanceOf(category, Category);
  });

  test("create", async ({ assert }) => {
    const category = await CategoryFactory.create();

    assert.properties(category, ["name"]);
  });

  test("belongs to industry", async ({ assert }) => {
    const category = await CategoryFactory.with("industry").create();

    assert.instanceOf(category, Category);
  });
});
