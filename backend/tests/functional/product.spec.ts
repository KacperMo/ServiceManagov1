import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { ProductFactory } from 'Database/factories'

test.group('Product', () => {
  test('index', async ({ }) => {
    const user = await UserFactory.create()
    const response = await client.get('/products').loginAs(user)

    response.assertStatus(200)
  })
  
  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/products')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const product = await ProductFactory.make()
    const response = await client.post('/products').json({
      brand: product.brand,
      model: product.model,
      title: product.title,
      is_active: product.is_active,
      quantity: product.quantity,
      price: product.price,
      cost_of_purchase: product.cost_of_purchase,
      is_public: product.is_public,
    }).loginAs(user)
    
      response.assertStatus(201)
    })

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const product = await ProductFactory.create()
      const response = await client.get(`/products/${product.id}`).loginAs(user)
  
      response.assertStatus(200)
    })

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const product = await ProductFactory.create()
      const product1 = await ProductFactory.make()
      const response = await client
        .put(`/products/${product.id}`)
        .json({ serial_or_imei: product1.serial_or_imei })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ serial_or_imei: product1.serial_or_imei })
    })
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const product = await ProductFactory.create()
      const response = await client.delete(`/products/${product.id}`).loginAs(user)
  
      response.assertStatus(204)
    })
})
