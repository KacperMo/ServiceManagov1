import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'
import { AffiliationFactory } from 'Database/factories'

test.group('Afiliation', () => {
  test('index', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.get('/afiliations').loginAs(user)

    response.assertStatus(200)
  })

  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/afiliations')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const afiliation = await AffiliationFactory.make()
    const response = await client.post('/afiliations').json({
      user_id: afiliation.user_id,
      percentage_value: afiliation.afiliated_company_id,
      afiliated_company_id: afiliation.afiliated_company_id,
    })
      .loginAs(user)

    response.assertStatus(201)
  })

  test('show', async ({ client }) => {
    const user = await UserFactory.create()
    const afiliation = await AffiliationFactory.create()
    const response = await client.get(`/afiliations/${afiliation.id}`).loginAs(user)

    response.assertStatus(200)
  })

  test('update', async ({ client }) => {
    const user = await UserFactory.create()
    const afiliation = await AffiliationFactory.create()
    const afiliation1 = await AffiliationFactory.make()
    const response = await client
      .put(`/afiliations/${afiliation.id}`)
      .json({ percentage_value: afiliation1.percentage_value })
      .loginAs(user)

    response.assertStatus(200)
    response.assertBodyContains({ percentage_value: afiliation1.percentage_value })
  })

  test('destroy', async ({ client }) => {
    const user = await UserFactory.create()
    const afiliation = await AffiliationFactory.create()
    const response = await client.delete(`/afiliations/${afiliation.id}`).loginAs(user)

    response.assertStatus(204)
  })
})
