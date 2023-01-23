import { test } from "@japa/runner";
import { CompanyFactory } from "Database/factories";
import Company from "App/Models/Company";

test.group("Company", () => {
  test("make company", async ({ assert }) => {
    const company = await CompanyFactory.make();

    assert.instanceOf(company, Company);
  });

  test("create company", async ({ assert }) => {
    const company = await CompanyFactory.create();

    assert.properties(company, ["industry_id", "owner_id", "name"]);
  });
});
