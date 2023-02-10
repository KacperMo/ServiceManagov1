import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Company from "App/Models/Company/Company";
import CreateCompanyValidator from "App/Validators/CreateCompanyValidator";

export default class CompaniesController {
  public async index({}: HttpContextContract) {
    return Company.query().preload("industry").preload("category");
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCompanyValidator);
    const company = await Company.create(payload);

    return response.created(company);
  }

  public async show({ params }: HttpContextContract) {
    const company = await Company.findOrFail(params.id);

    return company;
  }

  public async update({ request, params }: HttpContextContract) {
    const company = await Company.findOrFail(params.id);
    const payload = await request.validate(CreateCompanyValidator);
    company.merge(payload);
    await company.save();

    return company;
  }

  public async destroy({ response, params }: HttpContextContract) {
    const company = await Company.findOrFail(params.id);
    await company.delete();

    return response.noContent();
  }
}
