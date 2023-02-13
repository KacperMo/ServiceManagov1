import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Company/Category";
import CreateCategory from "App/Validators/Company/CreateCategoryValidator";

export default class CategoriesController {
  public async index({}: HttpContextContract): Promise<Category[]> {
    return Category.query().orderBy("name").preload("industry");
  }

  public async store({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const payload = await request.validate(CreateCategory);
    const category = await Category.create(payload);

    return response.created(category);
  }

  public async show({ params }: HttpContextContract): Promise<Category> {
    const category = Category.query()
      .where("id", "=", params.id)
      .preload("industry")
      .firstOrFail();

    return category;
  }

  public async update({
    request,
    params,
  }: HttpContextContract): Promise<Category> {
    const category = await Category.findOrFail(params.id);
    const payload = await request.validate(CreateCategory);
    category.merge(payload).save();

    return category;
  }

  public async destroy({
    response,
    params,
  }: HttpContextContract): Promise<void> {
    const category = await Category.findOrFail(params.id);
    await category.delete();

    return response.noContent();
  }
}
