import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { IndustryFactory } from 'Database/factories'

test.group('Industry', () => {
  test('index', async ({ }) => {
    const user = await UserFactory.create()
    const response = await client.get('/industries').loginAs(user)

    response.assertStatus(200)
  })
  
  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/industries')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const industry = await IndustryFactory.make()
    const response = await client.post('/industries').json({
      name: industry.name,
    }).loginAs(user)
    
      response.assertStatus(201)
    })

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const industry = await IndustryFactory.create()
      const response = await client.get(`/industries/${industry.id}`).loginAs(user)
  
      response.assertStatus(200)
    })

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const industry = await IndustryFactory.create()
      const industry1 = await IndustryFactory.make()
      const response = await client
        .put(`/industries/${industry.id}`)
        .json({ name: industry1.name })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ img_src1: imgs1.img_src1 })
    })
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const industry = await IndustryFactory.create()
      const response = await client.delete(`/industries/${industry.id}`).loginAs(user)
  
      response.assertStatus(204)
    })
})
