import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Industry from "App/Models/Company/Industry";

export default class IndustriesController {
  public async index({}: HttpContextContract) {
    return Industry.all();
  }
}
