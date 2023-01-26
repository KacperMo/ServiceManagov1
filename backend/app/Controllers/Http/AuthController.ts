import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import RegisterValidator from "App/Validators/RegisterValidator";

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");
    try {
      const token = await auth.use("api").attempt(email, password);
      const user = token.user;
      return { token, user };
    } catch {
      return response.unauthorized("Invalid credentials");
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use("api").revoke();
    return {
      revoked: true,
    };
  }

  public async register({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator);
    const user = await User.create({ email: payload.email, password: payload.password });
    let token;
    try {
      token = await auth.use('api').attempt(payload.email, payload.password)      
    } catch(e) {      
      return response.unauthorized('Invalid credentials')
    }
    
    return { token, user };
  }
}
