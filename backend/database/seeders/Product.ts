import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run () {
    await Product.createMany([
      {
        company_id: 1,
        category: 'LCD replacement',
        brand: 'Samsung',
        model: 's10e',
        symbol: 'SM-S101FE',
        serial_or_imei: 'SE23123SASEDR',
        title: 'Telefon z sieci Minus',
        condition: 'Nowy',
        is_active:true,
        quantity: 1,
        price: 200,
        cost_of_purchase: 100,
        is_public: true,
        invoice: true,
      },
    ])
  }
}
