import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { CategoryFactory } from 'Database/factories'

test.group('Categories', () => {
  test('index', async ({ }) => {
    const user = await UserFactory.create()
    const response = await client.get('/categories').loginAs(user)

    response.assertStatus(200)
  })
  
  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/categories')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const category = await CategoryFactory.make()
    const response = await client.post('/categories').json({
      name: category.name,
    }).loginAs(user)
    
      response.assertStatus(201)
    })

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const category = await CategoryFactory.create()
      const response = await client.get(`/categories/${category.id}`).loginAs(user)
  
      response.assertStatus(200)
    })

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const category = await CategoryFactory.create()
      const category1 = await CategoryFactory.make()
      const response = await client
        .put(`/categories/${category.id}`)
        .json({ name: category1.name })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ img_src1: imgs1.img_src1 })
    })
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const category = await CategoryFactory.create()
      const response = await client.delete(`/categories/${category.id}`).loginAs(user)
  
      response.assertStatus(204)
    })
})
