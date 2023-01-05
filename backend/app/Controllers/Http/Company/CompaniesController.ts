/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'

export default class CompaniesController {
  public async index ({}: HttpContextContract) {
    return Company.all()
  }

  public async store ({request, response}: HttpContextContract) {
    const name = request.input('name')
    const industry_id = request.input('industry_id')
    const owner_id = request.input('owner_id')
    const city = request.input('city')
    const street = request.input('street')
    const zip_code = request.input('zip_code')
    const house_number = request.input('house_number')
    const apartment_number = request.input('apartment_number')
    const nip = request.input('NIP')
    const phone_number = request.input('phone_number')
    const email = request.input('email')
    const logo = request.input('logo')

    const company = await Company.create({
      name: name,
      industry_id: industry_id,
      owner_id: owner_id,
      city: city,
      street: street,
      zip_code: zip_code,
      house_number: house_number,
      apartment_number: apartment_number,
      NIP: nip,
      phone_number: phone_number,
      email: email,
      logo: logo,
    })

    return response.created({ data: company })
  }

  //store vs create
  /*   public async create({}: HttpContextContract) {}
 */
  public async show ({params}: HttpContextContract) {
    const company = await Company.find(params.id)

    return company
  }

  public async update ({request, params}: HttpContextContract) {
    const company = await Company.findOrFail(params.id)
    const name = request.input('name')
    // fill with all company colums
    await company.merge({ name: name}).save()
    return company
  }

  public async destroy ({response, params}: HttpContextContract) {
    const company = await Company.findOrFail(params.id)
    await company.delete()

    return response.noContent()
  }
}
