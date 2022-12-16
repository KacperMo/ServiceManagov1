import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    try {
      const token = await auth.use('api').attempt(email, password)

      return token
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }

  public async register({ request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const user = User.create({ email, password })
    // const hashedPassword = await Hash.make(password)
    // const token = await auth.use('api').attempt(email, hashedPassword)
    return user
  }
}
