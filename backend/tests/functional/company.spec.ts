import { test } from "@japa/runner";
import { CompanyFactory, IndustryFactory } from "Database/factories";
import { UserFactory } from "Database/factories";

test.group("Company", () => {
  const url = "/companies";

  test("index", async ({ client }) => {
    const industries = await IndustryFactory.createMany(10);
    console.log(industries);
    const user = await UserFactory.create();
    const response = await client.get(url).loginAs(user);

    response.assertStatus(200);
  });

  test("index unauthorized", async ({ client }) => {
    const response = await client.get(url);

    response.assertStatus(401);
  });

  test("store", async ({ client }) => {
    const user = await UserFactory.create();
    const industry = await IndustryFactory.create();
    const company = await CompanyFactory.merge({
      industryId: industry.id,
    }).make();
    const response = await client.post(url).json(company).loginAs(user);

    response.assertStatus(201);
    // response.dump();
    // response.dumpError();
    // response.dumpBody();
  });

  test("show", async ({ client }) => {
    const user = await UserFactory.create();
    const company = await CompanyFactory.create();
    const response = await client.get(`${url}/${company.id}`).loginAs(user);

    response.assertStatus(200);
  });

  test("update", async ({ client }) => {
    const user = await UserFactory.create();
    const industry = await IndustryFactory.create();
    const company = await CompanyFactory.with("industry").create();
    const company1 = await CompanyFactory.with("industry")
      .merge({
        industryId: industry.id,
      })
      .make();
    const response = await client
      .put(`${url}/${company.id}`)
      .json(company1)
      .loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains({ name: company1.name });
  });

  test("destroy", async ({ client }) => {
    const user = await UserFactory.create();
    const company = await CompanyFactory.create();
    const response = await client.delete(`${url}/${company.id}`).loginAs(user);

    response.assertStatus(204);
  });
});
