import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Supplier from 'App/Models/Supplier'

export default class extends BaseSeeder {
  public async run () {
    await Supplier.createMany([
      {
        company_name: 'Company One',
        nip: '677-001-11-01',
        api: 'https://my.api.mockaroo.com/Supplier.json?key=e46b7050',
        api_key: 'e46b7050',
      },
      {
        company_name: 'Company Two',
        nip: '677-001-11-02',
        api: 'https://my.api.mockaroo.com/Supplier.json?key=e46b7050',
        api_key: 'e46b7050',
      },
    ])
  }
}
