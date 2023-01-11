import { test } from '@japa/runner'
import { CompanyFactory } from 'Database/factories'
import { UserFactory } from 'Database/factories'

test.group('Company', () => {
  test('index', async ({ client }) => {
    const user = await UserFactory.create()
    const response = await client.get('/company').loginAs(user)

    response.assertStatus(200)
  })

  test('unauthorized_index', async ({ client }) => {
    const response = await client.get('/company')

    response.assertStatus(401)
  })

  test('store', async ({ client }) => {
    const user = await UserFactory.create()
    const company = await CompanyFactory.make()
    const response = await client.post('/company').json({
      name: company.name,
      city: company.city,
      phone_number: company.phone_number,
      nip: company.nip,
    })
      .loginAs(user)

    response.assertStatus(201)
  })

  test('show', async ({ client }) => {
    const user = await UserFactory.create()
    const company = await CompanyFactory.create()
    const response = await client.get(`/company/${company.id}`).loginAs(user)

    response.assertStatus(200)
  })

  test('update', async ({ client }) => {
    const user = await UserFactory.create()
    const company = await CompanyFactory.create()
    const comapny1 = await CompanyFactory.make()
    const response = await client
      .put(`/company/${company.id}`)
      .json({ name: comapny1.name })
      .loginAs(user)

    response.assertStatus(200)
    response.assertBodyContains({ name: comapny1.name })
  })

  test('destroy', async ({ client }) => {
    const user = await UserFactory.create()
    const company = await CompanyFactory.create()
    const response = await client.delete(`/company/${company.id}`).loginAs(user)

    response.assertStatus(204)
  })
})
