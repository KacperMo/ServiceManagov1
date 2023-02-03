import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string([rules.email()]),
    password: schema.string(),
    name: schema.string([rules.maxLength(255)]),
  });

  public messages: CustomMessages = {'1':'ok'}
}
