import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { ServiceListFactory } from 'Database/factories'

test.group('Service list', () => {
  test('index', async ({ }) => {
    const user = await UserFactory.create()
    const response = await client.get('/service_lists').loginAs(user)

    response.assertStatus(200)
  })
  
  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/service_lists')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const serviceList = await ServiceListFactory.make()
    const response = await client.post('/service_lists').json({
      company_id: 1,
      url_base: serviceList.company_id,
      s1: serviceList.s1,
      s2: serviceList.s2,
      s3: serviceList.s3,
      s4: serviceList.s4,
      s5: serviceList.s5,
      s6: serviceList.s6,
      s7: serviceList.s7,
      s8: serviceList.s8,
      s9: serviceList.s9,
    }).loginAs(user)
    
      response.assertStatus(201)
    })

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const serviceList = await ServiceListFactory.create()
      const response = await client.get(`/service_lists/${serviceList.id}`).loginAs(user)
  
      response.assertStatus(200)
    })

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const serviceList = await ServiceListFactory.create()
      const serviceList1 = await ServiceListFactory.make()
      const response = await client
        .put(`/imgs_collection/${serviceList.id}`)
        .json({ s1: serviceList1.s1 })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ img_src1: imgs1.img_src1 })
    })
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const serviceList = await ServiceListFactory.create()
      const response = await client.delete(`/service_lists/${serviceList.id}`).loginAs(user)
  
      response.assertStatus(204)
    })
})
