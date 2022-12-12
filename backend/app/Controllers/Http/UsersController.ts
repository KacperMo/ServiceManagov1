import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return User.all()
  }

  public async store({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.create({
      email: email,
      password: password,
    })

    return response.created({ data: user })
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.find(params.id)

    return user
  }

  public async update({ request, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const email = request.input('email')
    await user.merge({ email: email }).save()

    return user
  }

  public async destroy({ response, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()

    return response.noContent()
  }
}
