import { test } from "@japa/runner";
import { BusinessCardFactory } from "Database/factories";
import BusinessCard from "App/Models/Company/BusinessCard";
import Company from "App/Models/Company/Company";

test.group("Business card", () => {
  test("make", async ({ assert }) => {
    const businessCard = await BusinessCardFactory.make();

    assert.instanceOf(businessCard, BusinessCard);
  });

  test("create", async ({ assert }) => {
    const businessCard = await BusinessCardFactory.create();

    assert.instanceOf(businessCard, BusinessCard);
  });

  test("belongs to company", async ({ assert }) => {
    const businessCard = await BusinessCardFactory.with("company").create();

    assert.instanceOf(businessCard.company, Company);
  });
});
