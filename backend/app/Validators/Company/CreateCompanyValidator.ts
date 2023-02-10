import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateCompanyValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    industryId: schema.number(),
    name: schema.string([rules.maxLength(255)]),
    city: schema.string.optional([rules.maxLength(255)]),
    street: schema.string.optional([rules.maxLength(255)]),
    zip_code: schema.string.optional(),
    house_number: schema.string.optional(),
    apartment_number: schema.string.optional(),
    nip: schema.string.optional(),
    phone_number: schema.string.optional(),
    email: schema.string.optional([rules.email()]),
    logo: schema.string.optional(),
  });

  public messages: CustomMessages = {};
}
