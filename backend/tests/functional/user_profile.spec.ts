import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { UserProfileFactory } from 'Database/factories'

test.group('User profile', () => {
  test('index', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.get('/profiles').loginAs(user)

    response.assertStatus(200)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const profile = await UserProfileFactory.make()
    const response = await client
      .post('/profiles')
      .json({
        email: profile.email,
        name: profile.name,
      })
      .loginAs(user)

    response.assertStatus(201)
  })

  test('show', async ({ client }) => {
    const user = await UserFactory.create()
    const profile = await UserProfileFactory.create()
    const response = await client.get(`/profiles/${profile.id}`).loginAs(user)

    response.assertStatus(200)
  })

  test('update', async ({ client }) => {
    const user = await UserFactory.create()
    const profile = await UserProfileFactory.create()
    const response = await client
      .put(`/profiles/${profile.id}`)
      .json({ email: profile.email })
      .loginAs(user)

    response.assertStatus(200)
    response.assertBodyContains({ name: profile.name })
  })

  test('destroy', async ({ client }) => {
    const user = await UserFactory.create()
    const profile = await UserProfileFactory.create()
    const response = await client.delete(`/profiles/${profile.id}`).loginAs(user)

    response.assertStatus(204)
  })
})
