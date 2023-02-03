import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from 'App/Models/Customer/Customer';

export default class extends BaseSeeder {
  public async run () {
    await Customer.createMany([
      {
        id: 1,
        company_id: "19ef63bd-4852-4206-ba81-6c04098016be",
        name: "Adam",
        surname: "Glanos",
        phone_number: "123-322-325",
        email: "adamglanos@mail.pl"
      },
    ]);
  }
}
