import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Schooling from 'App/Models/Schooling'

export default class extends BaseSeeder {
  public async run () {
    await Schooling.createMany([
      {
        name: 'New Year - New Company',
        title: 'How to increase profits without incurring costs',
        lead: 'Adam Nowak',
        platform: 'YT',
        url: 'https://www.youtube.com/watch?v=xm3YgoEiEDc&t=2s',
        date: '02/02/2023',
        duration: '3',
      },
      {
        name: 'Expand your business',
        title: 'Business development in 3 months',
        lead: 'Adam Nowak',
        platform: 'YT',
        url: 'https://www.youtube.com/watch?v=xm3YgoEiEDc&t=2s',
        date: '02/02/2023',
        duration: '3',
      },
    ])
  }
}
