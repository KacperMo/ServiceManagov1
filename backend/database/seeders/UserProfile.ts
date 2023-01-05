import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserProfile from 'App/Models/UserProfile'

export default class extends BaseSeeder {
  public async run () {
    await UserProfile.createMany([
      {
        company_id: 1,
        position: 'pracownik',
        name: 'Michał',
        surname: 'Bogusz',
        phone: '132-123-123',
        email: 'michal@bogusz.pl',
        salary: 3200,
        note: 'Pełen etat',
        is_active: true,
      },
      {
        company_id: 1,
        position: 'pracownik',
        name: 'Agata',
        surname: 'Małysz',
        phone: '132-123-888',
        email: 'agata@malysz.pl',
        salary: 3200,
        note: 'Pełen etat',
        is_active: true,
      },
    ])
  }
}
