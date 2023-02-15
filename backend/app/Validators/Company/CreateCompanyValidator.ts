import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateCompanyValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    industryId: schema.number(),
    name: schema.string([rules.maxLength(255)]),
    nip: schema.string.optional([rules.maxLength(255)]),
    regon: schema.string.optional([rules.maxLength(255)]),
    province: schema.string.optional([rules.maxLength(255)]),
    district: schema.string.optional([rules.maxLength(255)]),
    community: schema.string.optional([rules.maxLength(255)]),
    city: schema.string.optional([rules.maxLength(255)]),
    propertyNumber: schema.string.optional([rules.maxLength(10)]),
    apartmentNumber: schema.string.optional([rules.maxLength(10)]),
    zipCode: schema.string.optional([rules.maxLength(25)]),
    street: schema.string.optional([rules.maxLength(255)]),
    postCity: schema.string.optional([rules.maxLength(255)]),
    phoneNumber: schema.string.optional(),
    email: schema.string.optional([rules.email()]),
    logo: schema.string.optional(),
  });

  public messages: CustomMessages = {};
}
