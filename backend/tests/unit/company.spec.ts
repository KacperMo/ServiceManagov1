import { test } from "@japa/runner";
import { CompanyFactory } from "Database/factories";
import Company from "App/Models/Company";
import Industry from "App/Models/Industry";

test.group("Company", () => {
  test("make", async ({ assert }) => {
    const company = await CompanyFactory.make();

    assert.instanceOf(company, Company);
  });

  test("create", async ({ assert }) => {
    const company = await CompanyFactory.create();
    assert.properties(company, ["name"]); //  "industry_id",  "owner_id",
  });

  test("belongs to industry", async ({ assert }) => {
    const company = await CompanyFactory.with("industry").create();

    assert.instanceOf(company.industry, Industry);
  });
});
