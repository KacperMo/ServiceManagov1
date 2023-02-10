import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Industry from "App/Models/Company/Industry";

export default class IndustriesController {
  public async index({}: HttpContextContract) {
    return Industry.all();
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
