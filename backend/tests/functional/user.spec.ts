import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'

test.group('User', () => {
  test('index', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.get('/users').loginAs(user)

    response.assertStatus(200)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const user1 = await UserFactory.make()
    const response = await client
      .post('/users')
      .json({
        email: user1.email,
        password: user1.password,
      })
      .loginAs(user)

    response.assertStatus(201)
  })

  test('show', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.get(`/users/${user.id}`).loginAs(user)

    response.assertStatus(200)
  })

  test('update', async ({ client }) => {
    const user = await UserFactory.create()
    const user1 = await UserFactory.make()
    const response = await client
      .put(`/users/${user.id}`)
      .json({ email: user1.email })
      .loginAs(user)

    response.assertStatus(200)
    response.assertBodyContains({ email: user1.email })
  })

  test('destroy', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.delete(`/users/${user.id}`).loginAs(user)

    response.assertStatus(204)
  })
})
