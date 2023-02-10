import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Industry from "App/Models/Company/Industry";

export default class IndustriesController {
  public async index({}: HttpContextContract) {
    return Industry.all();
  }

  public async store({ request, response }: HttpContextContract) {
    const industry = await Industry.create(request.body());

    return response.created(industry);
  }

  public async show({ params }: HttpContextContract) {
    const industry = Industry.findOrFail(params.id);

    return industry;
  }

  public async update({ request, params }: HttpContextContract) {
    const industry = await Industry.findOrFail(params.id);
    const payload = request.body();
    industry.merge(payload).save();

    return industry;
  }

  public async destroy({ response, params }: HttpContextContract) {
    const industry = await Industry.findOrFail(params.id);
    await industry.delete();

    return response.noContent();
  }
}
