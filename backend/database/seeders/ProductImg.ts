import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProductImg from 'App/Models/ProductImg'

export default class extends BaseSeeder {
  public async run () {
    await ProductImg.createMany([
      {
        url_base: '/UserFolder/123-1sda2123-123/Products/sda213/',
        img_src1: 'camera_sony.png',
        img_src2: 'new.png',
        img_src3: 'noname.png',
        img_src4: 'camera_sony.png',
      },
    // Write your database queries inside the run method
    ])
  }
}
