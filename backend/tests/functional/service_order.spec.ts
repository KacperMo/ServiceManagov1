import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { ServiceOrderFactory } from 'Database/factories'

test.group('Service order', () => {
  test('index', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.get('/tickets').loginAs(user)

    response.assertStatus(200)
  })

  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/tickets')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const ticket = await ServiceOrderFactory.make()
    const response = await client.post('/ticket').json({
      customer_id: 1,
      rma: ticket.rma,
      brand: ticket.brand,
      comment: ticket.comment,
    })
      .loginAs(user)

    response.assertStatus(201)
  })

  test('show', async ({ client }) => {
    const user = await UserFactory.create()
    const ticket = await ServiceOrderFactory.create()
    const response = await client.get(`/tickets/${ticket.id}`).loginAs(user)

    response.assertStatus(200)
  })

  test('update', async ({ client }) => {
    const user = await UserFactory.create()
    const ticket = await ServiceOrderFactory.create()
    const ticket1 = await ServiceOrderFactory.make()
    const response = await client
      .put(`/tickets/${ticket.id}`)
      .json({ comment: ticket1.comment })
      .loginAs(user)

    response.assertStatus(200)
    response.assertBodyContains({ comment: ticket1.comment })
  })

  test('destroy', async ({ client }) => {
    const user = await UserFactory.create()
    const ticket = await ServiceOrderFactory.create()
    const response = await client.delete(`/tickets/${ticket.id}`).loginAs(user)

    response.assertStatus(204)
  })
})
