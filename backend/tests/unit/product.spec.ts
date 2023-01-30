import { test } from "@japa/runner";
import { ProductFactory } from "Database/factories";
import Product from "App/Models/Product";
import Company from "App/Models/Company/Company";

test.group("Product", () => {
  test("make", async ({ assert }) => {
    const product = await ProductFactory.make();

    assert.instanceOf(product, Product);
  });

  test("create", async ({ assert }) => {
    const product = await ProductFactory.create();

    assert.properties(product, [
      "name",
      "model",
      "description",
      "quantity",
      "price",
      "cost_of_purchase",
      "is_active",
    ]);
  });

  test("belongs to company", async ({ assert }) => {
    const product = await ProductFactory.with("company").create();

    assert.instanceOf(product.company, Company);
  });
});
