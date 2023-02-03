import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserProfile from 'App/Models/User/UserProfile'

export default class UserProfilesController {
  public async index ({}: HttpContextContract) {
    return UserProfile.all()
  }

  public async store ({request, response}: HttpContextContract) {
    const position = request.input('position')
    const name = request.input('name')
    const surname = request.input('surname')
    const phone = request.input('phone')
    const email = request.input('email')
    const salary = request.input('salary')
    const note = request.input('note')
    const avatar = request.input('avatar')
    const baner = request.input('avatar')

    const profile = await UserProfile.create({
      position: position,
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      salary: salary,
      note: note,
      avatar: avatar,
      baner: baner,
    })
    response.status(201)
    return response.created({ data: profile })
  }

  public async show ({params}: HttpContextContract) {
    const profile = await UserProfile.find(params.id)
    
    return profile
  }

  public async update ({ request, params }: HttpContextContract) {
    const profile = await UserProfile.findOrFail(params.id)
    const email = request.input('email')
    await profile.merge({ email: email }).save()

    return profile
  }

  public async destroy ({ response, params }: HttpContextContract) {
    const profile = await UserProfile.findOrFail(params.id)
    await profile.delete()

    return response.noContent()
  }
}
