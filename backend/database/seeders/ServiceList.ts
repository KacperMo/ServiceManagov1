import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ServiceList from 'App/Models/Customer/ServiceList'

export default class extends BaseSeeder {
  public async run () {
    await ServiceList.createMany([
      {
        company_id: 1,
        s1: 'Diagnoza',
        s2: 'Wymiana podzespołów',
        s3: 'Usuwanie wirusów',
        s4: 'Wymiana ekranu',
        s5: 'Aktualizacja',
        s6: 'Czyszczenie po zalaniu',
        s7: 'Zmiana gniazda ładowania',
        s8: 'Migracje',
      },
    ])
  }
}
