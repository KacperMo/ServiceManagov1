import { test } from '@japa/runner'
import { CompanyFactory } from 'Database/factories'

test.group('Company', () => {
  test('index', async ({ client }) => {
    const response = await client.get('/company')

    response.assertStatus(200)
  })

  test('store', async ({ client }) => {
    const company = await CompanyFactory.make()
    const response = await client.post('/company').json({
      name: company.name,
      city: company.city,
      phone_number: company.phone_number,
      NIP: company.NIP,
      industry_id: company.industry_id,
      owner_id: company.owner_id,
    })

    response.assertStatus(201)
  })

  test('show', async ({ client }) => {
    const company = await CompanyFactory.create()
    const response = await client.get(`/company/${company.id}`)

    response.assertStatus(200)
  })

  test('update', async ({ client }) => {
    const company = await CompanyFactory.create()
    const comapny1 = await CompanyFactory.make()
    const response = await client.put(`/company/${company.id}`).json({ name: comapny1.name })

    response.assertStatus(200)
    response.assertBodyContains({ name: comapny1.name })
  })

  test('destroy', async ({ client }) => {
    const company = await CompanyFactory.create()
    const response = await client.delete(`/company/${company.id}`)

    response.assertStatus(204)
  })
})
