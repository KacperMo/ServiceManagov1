import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { NotyficationFactory } from 'Database/factories'

test.group('Notyfication', () => {
  test('index', async ({ }) => {
    const user = await UserFactory.create()
    const response = await client.get('/notyfications').loginAs(user)

    response.assertStatus(200)
  })
  
  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/notyfications')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const notyfication = await NotyficationFactory.make()
    const response = await client.post('/notyfications').json({
      company_id: notyfication.company_id,
      rank: notyfication.rank,
      description: evnotyficationent.description,
    }).loginAs(user)
    
      response.assertStatus(201)
    })

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const notyfication = await NotyficationFactory.create()
      const response = await client.get(`/notyfications/${notyfication.id}`).loginAs(user)
  
      response.assertStatus(200)
    })

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const notyfication = await NotyficationFactory.create()
      const notyfication1 = await NotyficationFactory.make()
      const response = await client
        .put(`/notyfications/${notyfication.id}`)
        .json({ rank: notyfication1.rank })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ rank: notyfication1.rank })
    })
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const notyfication = await NotyficationFactory.create()
      const response = await client.delete(`/notyfications/${notyfication.id}`).loginAs(user)
  
      response.assertStatus(204)
    })
})
