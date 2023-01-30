import { test } from "@japa/runner";
import { CompanyFactory } from "Database/factories";
import Company from "App/Models/Company/Company";
import Industry from "App/Models/Company/Industry";
import Category from "App/Models/Company/Category";

test.group("Company", () => {
  test("make", async ({ assert }) => {
    const company = await CompanyFactory.make();

    assert.instanceOf(company, Company);
  });

  test("create", async ({ assert }) => {
    const company = await CompanyFactory.with("industry")
      .with("category")
      .with("users")
      .with("products")
      .with("businessCards")
      .create();

    assert.properties(company, ["industryId", "categoryId", "name"]);
  });

  test("belongs to industry", async ({ assert }) => {
    const company = await CompanyFactory.with("industry").create();

    assert.instanceOf(company.industry, Industry);
  });

  test("belongs to category", async ({ assert }) => {
    const company = await CompanyFactory.with("category").create();

    assert.instanceOf(company.category, Category);
  });

  test("has many users", async ({ assert }) => {
    const company = await CompanyFactory.with("users").create();

    assert.isArray(company.users);
  });

  test("has many products", async ({ assert }) => {
    const company = await CompanyFactory.with("products").create();

    assert.isArray(company.products);
  });

  test("has many business cards", async ({ assert }) => {
    const company = await CompanyFactory.with("businessCards").create();

    assert.isArray(company.businessCards);
  });
});
