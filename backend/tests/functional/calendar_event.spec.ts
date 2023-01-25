import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { CalendarEventFactory } from 'Database/factories'

test.group('Calendar event', () => {
/*   test.group.each.setup(() => {
    console.log('executed before the test')
  }) */

  test('index', async ({ }) => {
    const user = await UserFactory.create()
    const response = await client.get('/events').loginAs(user)

    response.assertStatus(200)
  })
  
  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/events')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const event = await CalendarEventFactory.make()
    const response = await client.post('/events').json({
      company_id: event.company_id,
      rank: event.rank,
      description: event.description,
    }).loginAs(user)
    
      response.assertStatus(201)
    })

    test('show', async ({ client }) => {
      const user = await UserFactory.create()
      const event = await CalendarEventFactory.create()
      const response = await client.get(`/events/${event.id}`).loginAs(user)
  
      response.assertStatus(200)
    })

    test('update', async ({ client }) => {
      const user = await UserFactory.create()
      const event = await CalendarEventFactory.create()
      const event1 = await CalendarEventFactory.make()
      const response = await client
        .put(`/events/${event.id}`)
        .json({ description: event1.description })
        .loginAs(user)
  
      response.assertStatus(200)
      response.assertBodyContains({ description: event1.description })
    })
  
    test('destroy', async ({ client }) => {
      const user = await UserFactory.create()
      const event = await CalendarEventFactory.create()
      const response = await client.delete(`/events/${event.id}`).loginAs(user)
      response.assertStatus(204)
    })

})
