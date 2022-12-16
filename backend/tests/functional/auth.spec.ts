import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
// import Hash from '@ioc:Adonis/Core/Hash'

test.group('Auth', () => {
  test('register', async ({ client }) => {
    const user = await UserFactory.make()
    const response = await client.post('/register').json({
      email: user.email,
      password: user.password,
    })

    response.assertStatus(200)
  })

  // to nie jest dobry test
  test('login', async ({ client }) => {
    const user = await UserFactory.make()
    // const hashedPassword = await Hash.make(user.password)
    const response = await client.post('/login').json({
      email: user.email,
      password: user.password,
    })

    response.assertStatus(401)
  })

  test('logout', async ({ client }) => {
    const user = await UserFactory.make()
    const response = await client.post('/logout').json({
      email: user.email,
      password: user.password,
    })

    response.assertStatus(200)
  })
})
