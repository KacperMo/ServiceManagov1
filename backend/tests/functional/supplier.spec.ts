import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { SupplierFactory } from 'Database/factories'

test.group('Supplier', () => {
  test('index', async ({ }) => {
    const user = await UserFactory.create()
    const response = await client.get('/supplier').loginAs(user)

    response.assertStatus(200)
  }).skip(true)
  
  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/supplier')

    response.assertStatus(401)
  }).skip(true)

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const supplier = await SupplierFactory.make()
    const response = await client.post('/supplier').json({
      company_name: supplier.company_name,
      nip: supplier.nip,
      api: supplier.api,
      api_key: supplier.api_key,
    }).loginAs(user)
    
      response.assertStatus(201)
    }).skip(true)

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const supplier = await SupplierFactory.create()
      const response = await client.get(`/imgs_collection/${supplier.id}`).loginAs(user)
  
      response.assertStatus(200)
    }).skip(true)

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const supplier = await SupplierFactory.create()
      const supplier1 = await SupplierFactory.make()
      const response = await client
        .put(`/supplier/${supplier.id}`)
        .json({ company_name: supplier1.company_name })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ icompany_name: supplier1.company_name })
    }).skip(true)
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const supplier = await SupplierFactory.create()
      const response = await client.delete(`/supplier/${supplier.id}`).loginAs(user)
  
      response.assertStatus(204)
    }).skip(true)
})
