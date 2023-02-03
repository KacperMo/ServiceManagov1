import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserProfile from 'App/Models/User/UserProfile'

export default class extends BaseSeeder {
  public async run () {
    await UserProfile.createMany([
      {
        companyId: 1,
        position: 'pracownik',
        name: 'Michał',
        surname: 'Bogusz',
        phone: '132-123-123',
        email: 'michal@bogusz.pl',
        salary: 3200,
        note: 'Pełen etat',
        isActive: true,
      },
      {
        companyId: 1,
        position: 'pracownik',
        name: 'Agata',
        surname: 'Małysz',
        phone: '132-123-888',
        email: 'agata@malysz.pl',
        salary: 3200,
        note: 'Pełen etat',
        isActive: true,
      },
    ])
  }
}
