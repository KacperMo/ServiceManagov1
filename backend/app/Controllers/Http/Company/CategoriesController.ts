import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Company/Category";

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    return Category.all();
  }

  public async store({ request, response }: HttpContextContract) {
    const category = await Category.create(request.body());

    return response.created(category);
  }

  public async show({ params }: HttpContextContract) {
    const category = Category.findOrFail(params.id);

    return category;
  }

  public async update({ request, params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id);
    const payload = request.body();
    category.merge(payload).save();

    return category;
  }

  public async destroy({ response, params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id);
    await category.delete();

    return response.noContent();
  }
}
