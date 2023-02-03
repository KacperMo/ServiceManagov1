import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Notyfication from 'App/Models/System/Notyfication';

export default class extends BaseSeeder {
  public async run () {
    await Notyfication.createMany([
      {
        id: 1,
        company_id: "19ef63bd-4852-4206-ba81-6c04098016be",
        rank: "info",
        description: "You'r looking good today.",
      },
    ]);
  }
}
