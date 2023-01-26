import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { BusinessCardFactory } from 'Database/factories'

test.group('Business card', () => {
  test('index', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.get('/business_card').loginAs(user)

    response.assertStatus(200)
  })

  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/business_card')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const card = await BusinessCardFactory.make()
    const response = await client.post('/business_card').json({
      name: card.name,
      city: company.city,
      phone_number: company.phone_number,
      nip: company.nip,
    })
      .loginAs(user)

    response.assertStatus(201)
  })

  test('show', async ({ client }) => {
    const user = await UserFactory.create()
    const card = await BusinessCardFactory.create()
    const response = await client.get(`/business_card/${card.id}`).loginAs(user)

    response.assertStatus(200)
  })

  test('update', async ({ client }) => {
    const user = await UserFactory.create()
    const card = await BusinessCardFactory.create()
    const card1 = await BusinessCardFactory.make()
    const response = await client
      .put(`/business_card/${card.id}`)
      .json({ description: card1.description })
      .loginAs(user)

    response.assertStatus(200)
    response.assertBodyContains({ description: card1.description })
  })

  test('destroy', async ({ client }) => {
    const user = await UserFactory.create()
    const card = await BusinessCardFactory.create()
    const response = await client.delete(`/business_card/${card.id}`).loginAs(user)

    response.assertStatus(204)
  })
})
