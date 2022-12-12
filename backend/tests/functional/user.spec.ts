import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'

test.group('User', () => {
  test('index', async ({ client }) => {
    const response = await client.get('/users')

    response.assertStatus(200)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.make()
    const response = await client.post('/users').json({
      email: user.email,
      password: user.password,
    })

    response.assertStatus(201)
  })

  test('show', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.get(`/users/${user.id}`)

    response.assertStatus(200)
  })

  test('update', async ({ client }) => {
    const user = await UserFactory.create()
    const user1 = await UserFactory.make()
    const response = await client.put(`/users/${user.id}`).json({ email: user1.email })

    response.assertStatus(200)
    response.assertBodyContains({ email: user1.email })
  })

  test('destroy', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.delete(`/users/${user.id}`)

    response.assertStatus(204)
  })
})
