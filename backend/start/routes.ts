/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import User from 'App/Models/User'
// import Hash from '@ioc:Adonis/Core/Hash'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource('users', 'UsersController').apiOnly()
}).middleware('auth')

Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')
Route.post('register', 'AuthController.register')

// Route.post('login', async ({ auth, request, response }) => {
//   const email = request.input('email')
//   const password = request.input('password')
//   // return { email, password }
//   try {
//     const token = await auth.use('api').attempt(email, password)
//     return token
//   } catch {
//     return response.unauthorized('Invalid credentials')
//   }
// })

// Route.post('register', async ({ auth, request, response }) => {
//   const email = request.input('email')
//   const password = request.input('password')
//   const user = User.create({ email, password })
//   // const hashedPassword = await Hash.make(password)
//   // const token = await auth.use('api').attempt(email, hashedPassword)
//   return user
//   // return { email, password }
//   // try {
//   //   const token = await auth.use('api').attempt(email, password)
//   //   return token
//   // } catch {
//   //   return response.unauthorized('Invalid credentials')
//   // }
// })

// Route.post('/logout', async ({ auth, response }) => {
//   await auth.use('api').revoke()
//   return {
//     revoked: true,
//   }
// })
