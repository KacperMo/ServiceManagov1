import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { CustomerFactory } from 'Database/factories'

test.group('Customer', () => {
  test('index', async ({ }) => {
    const user = await UserFactory.create()
    const response = await client.get('/imgs_collection').loginAs(user)

    response.assertStatus(200)
  }).skip(true)
  
  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/imgs_collection')

    response.assertStatus(401)
  }).skip(true)

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const customer = await CustomerFactory.make()
    const response = await client.post('/customers').json({
      customer_id: 1,
      name: customer.name,
      rating: customer.rating,
      street: customer.street,
      nip: customer.nip,
      company_name: customer.company_name,
    }).loginAs(user)
    
      response.assertStatus(201)
    }).skip(true)

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const customer = await CustomerFactory.create()
      const response = await client.get(`/customers/${customer.id}`).loginAs(user)
  
      response.assertStatus(200)
    }).skip(true)

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const customer = await CustomerFactory.create()
      const customer1 = await CustomerFactory.make()
      const response = await client
        .put(`/customers/${customer.id}`)
        .json({ rating: customer1.rating })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ rating: customer1.rating })
    }).skip(true)
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const customer = await CustomerFactory.create()
      const response = await client.delete(`/customers/${customer.id}`).loginAs(user)
  
      response.assertStatus(204)
    }).skip(true)
})
