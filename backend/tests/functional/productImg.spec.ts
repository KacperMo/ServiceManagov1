import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { ProductImgFactory } from 'Database/factories'
import { ServiceOrderFactory } from 'Database/factories'

test.group('Product imgs', () => {
  test('index', async ({ }) => {
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
    const imgs = await ProductImgFactory.make()
    const response = await client.post('/imgs_collection').json({
      customer_id: 1,
      url_base: imgs.url_base,
      img_src1: imgs.img_src1,
      img_src2: imgs.img_src2,
      img_src3: imgs.img_src3,
      img_src4: imgs.img_src4,
    }).loginAs(user)
    
      response.assertStatus(201)
    })

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const imgs = await ProductImgFactory.create()
      const response = await client.get(`/imgs_collection/${imgs.id}`).loginAs(user)
  
      response.assertStatus(200)
    })

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const imgs = await ServiceOrderFactory.create()
      const imgs1 = await ServiceOrderFactory.make()
      const response = await client
        .put(`/create/${imgs.id}`)
        .json({ img_src1: imgs1.img_src1 })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ img_src1: imgs1.img_src1 })
    })
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const imgs = await ServiceOrderFactory.create()
      const response = await client.delete(`/imgs_collection/${imgs.id}`).loginAs(user)
  
      response.assertStatus(204)
    })

  })
