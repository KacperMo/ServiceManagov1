import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Affiliation from 'App/Models/Affiliation'

export default class extends BaseSeeder {
  public async run () {
    await Affiliation.createMany([
      {
        id: 1,
        percentage_value: 5,
        afiliated_company_id: '3',
      },
      {
        id: 1,
        percentage_value: 5,
        afiliated_company_id: '2',
      },
    ])
  }
}
