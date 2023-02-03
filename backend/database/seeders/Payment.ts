import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Payment from 'App/Models/Integration/Payment';

export default class extends BaseSeeder {
  public async run () {
    await Payment.createMany([
      {
        company_id: "19ef63bd-4852-4206-ba81-6c04098016be",
        ammount: 50,
        comfirmation: false,
      },
      {
        company_id: "19ef63bd-4852-4206-ba81-6c04098016be",
        ammount: 10,
        comfirmation: true,
      },
      {
        company_id: "19ef63bd-4852-4206-ba81-6c04098016be",
        ammount: 150,
        comfirmation: false,
      },
      {
        company_id: "19ef63bd-4852-4206-ba81-6c04098016be",
        ammount: 10,
        comfirmation: true,
      },
    ]);
  }
}
