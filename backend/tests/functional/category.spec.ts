import { test } from "@japa/runner";
import User from "App/Models/User";
import {
  UserFactory,
  CategoryFactory,
  IndustryFactory,
} from "Database/factories";

test.group("Categories", (group) => {
  const url = "/categories";
  let user: User;

  group.each.setup(async () => {
    user = await UserFactory.create();
  });

  test("index", async ({ client }) => {
    const response = await client.get(url).loginAs(user);
    await CategoryFactory.with("industry").create();
    response.assertStatus(200);
    response.assertBodyContains([]);
  });

  test("index unauthorized", async ({ client }) => {
    const response = await client.get(url);

    response.assertStatus(401);
  });

  test("store", async ({ client }) => {
    const industry = await IndustryFactory.create();
    const category = await CategoryFactory.merge({
      industryId: industry.id,
    }).make();
    const response = await client.post(url).json(category).loginAs(user);

    response.assertStatus(201);
    response.assertBodyContains({
      industry_id: industry.id,
      name: category.name,
    });
  });

  test("show", async ({ client }) => {
    const category = await CategoryFactory.with("industry").create();
    const response = await client.get(`${url}/${category.id}`).loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains({ name: category.name });
  });

  test("update", async ({ client }) => {
    const industry = await IndustryFactory.create();
    const category = await CategoryFactory.with("industry").create();
    const category1 = await CategoryFactory.merge({
      industryId: industry.id,
    }).make();
    const response = await client
      .put(`${url}/${category.id}`)
      .json(category1)
      .loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains({
      industry_id: industry.id,
      name: category1.name,
    });
  });

  test("destroy", async ({ client }) => {
    const category = await CategoryFactory.create();
    const response = await client.delete(`${url}/${category.id}`).loginAs(user);

    response.assertStatus(204);
  });
});
