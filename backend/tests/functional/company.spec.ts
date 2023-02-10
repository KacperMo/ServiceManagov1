import { test } from "@japa/runner";
import User from "App/Models/User";
import { CompanyFactory, IndustryFactory } from "Database/factories";
import { UserFactory } from "Database/factories";

test.group("Company", (group) => {
  const url = "/companies";
  let user: User;

  group.each.setup(async () => {
    user = await UserFactory.create();
  });

  test("index", async ({ client }) => {
    const company = await CompanyFactory.with("industry")
      .with("category")
      .create();
    const response = await client.get(url).loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains([{ name: company.name }]);
  });

  test("index unauthorized", async ({ client }) => {
    const response = await client.get(url);

    response.assertStatus(401);
  });

  test("store", async ({ client }) => {
    const industry = await IndustryFactory.create();
    const company = await CompanyFactory.merge({
      industryId: industry.id,
    }).make();
    const response = await client.post(url).json(company).loginAs(user);

    response.assertStatus(201);
    response.assertBodyContains({
      industry_id: industry.id,
      name: company.name,
    });
  });

  test("show", async ({ client }) => {
    const company = await CompanyFactory.create();
    const response = await client.get(`${url}/${company.id}`).loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains({ name: company.name });
  });

  test("update", async ({ client }) => {
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
    const company = await CompanyFactory.create();
    const response = await client.delete(`${url}/${company.id}`).loginAs(user);

    response.assertStatus(204);
  });
});
