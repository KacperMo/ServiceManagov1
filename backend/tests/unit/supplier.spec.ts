import { test } from "@japa/runner";
import { SupplierFactory } from "Database/factories";
import Supplier from "App/Models/Company/Supplier";
import Industry from "App/Models/Company/Industry";

test.group("Supplier", () => {
  test("make", async ({ assert }) => {
    const supplier = await SupplierFactory.make();

    assert.instanceOf(supplier, Supplier);
  });

  test("create", async ({ assert }) => {
    const supplier = await SupplierFactory.with("industry").create();

    assert.properties(supplier, ["industryId", "company_name"]);
  });

  test("belongs to industry", async ({ assert }) => {
    const supplier = await SupplierFactory.with("industry").create();

    assert.instanceOf(supplier.industry, Industry);
  });
});
