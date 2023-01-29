import { test } from "@japa/runner";
import { UserFactory } from "Database/factories";
import Company from "App/Models/Company/Company";

test.group("User", () => {
  test("belongs to company", async ({ assert }) => {
    const user = await UserFactory.with("company").create();

    assert.instanceOf(user.company, Company);
  });
});
