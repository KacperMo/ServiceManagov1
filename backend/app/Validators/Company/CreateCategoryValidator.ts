import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateCategoryValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    industryId: schema.number(),
    name: schema.string([rules.maxLength(255)]),
  });

  public messages: CustomMessages = {};
}
