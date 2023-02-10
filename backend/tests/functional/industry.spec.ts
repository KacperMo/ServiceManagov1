import { test } from "@japa/runner";
import User from "App/Models/User";
import { UserFactory } from "Database/factories";
import { IndustryFactory } from "Database/factories";

test.group("Industry", (group) => {
  const url = "/industries";
  let user: User;

  group.each.setup(async () => {
    user = await UserFactory.create();
  });

  test("index", async ({ client }) => {
    const response = await client.get(url).loginAs(user);
    await IndustryFactory.create();

    response.assertStatus(200);
    response.assertBodyContains([]);
  });

  test("index unauthorized", async ({ client }) => {
    const response = await client.get(url);

    response.assertStatus(401);
  });

  test("store", async ({ client }) => {
    const industry = await IndustryFactory.make();
    const response = await client.post(url).json(industry).loginAs(user);

    response.assertStatus(201);
    response.assertBodyContains({ name: industry.name });
  });

  test("store vith validation error", async ({ client }) => {
    const industry = await IndustryFactory.merge({ name: "" }).make();
    const response = await client.post(url).json(industry).loginAs(user);

    response.assertStatus(422);
    response.assertBodyContains({
      errors: [
        {
          rule: "required",
          field: "name",
          message: "required validation failed",
        },
      ],
    });
  });

  test("show", async ({ client }) => {
    const industry = await IndustryFactory.create();
    const response = await client.get(`${url}/${industry.id}`).loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains({ name: industry.name });
  });

  test("update", async ({ client }) => {
    const industry = await IndustryFactory.create();
    const industry1 = await IndustryFactory.make();
    const response = await client
      .put(`${url}/${industry.id}`)
      .json({ name: industry1.name })
      .loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains({ name: industry1.name });
  });

  test("update with validation error", async ({ client }) => {
    const industry = await IndustryFactory.create();
    const industry1 = await IndustryFactory.merge({ name: "" }).make();
    const response = await client
      .put(`${url}/${industry.id}`)
      .json({ name: industry1.name })
      .loginAs(user);

    response.assertStatus(422);
    response.assertBodyContains({
      errors: [
        {
          rule: "required",
          field: "name",
          message: "required validation failed",
        },
      ],
    });
  });

  test("destroy", async ({ client }) => {
    const industry = await IndustryFactory.create();
    const response = await client.delete(`${url}/${industry.id}`).loginAs(user);

    response.assertStatus(204);
  });
});
