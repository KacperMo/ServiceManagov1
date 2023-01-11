import { test } from '@japa/runner'

test('display index page', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({ ServiceManago: 'v2.0' })
})
