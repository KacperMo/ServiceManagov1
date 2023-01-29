import { test } from "@japa/runner";
import { IndustryFactory } from "Database/factories";
import Industry from "App/Models/Company/Industry";

test.group("Industry", () => {
  test("make", async ({ assert }) => {
    const industry = await IndustryFactory.make();

    assert.instanceOf(industry, Industry);
  });

  test("create", async ({ assert }) => {
    const industry = await IndustryFactory.create();

    assert.properties(industry, ["name"]);
  });

  test("has many categories", async ({ assert }) => {
    const industry = await IndustryFactory.with("categories", 2).create();

    assert.isArray(industry.categories);
  });

  test("has many suppliers", async ({ assert }) => {
    const industry = await IndustryFactory.with("suppliers", 2).create();

    assert.isArray(industry.suppliers);
  });

  test("has many companies", async ({ assert }) => {
    const industry = await IndustryFactory.with("companies", 2).create();

    assert.isArray(industry.companies);
  });
});
