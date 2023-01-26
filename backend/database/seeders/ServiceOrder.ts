import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ServiceOrder from 'App/Models/ServiceOrder'
import { ServiceOrderFactory } from 'Database/factories'

export default class extends BaseSeeder {
  public async run () {
    await ServiceOrder.createMany([
      {
        const company = await CompanyFactory.make()
        id:'19ef63bd-4852-4206-ba81-6c04098016be',
        customer_id:'1'
        rma:company.rma,
        city:'Warszawa',
        comment:'Zgłoszenie testowe',
        phone_number:'123-859-123',
      }
    ])
  }
}
