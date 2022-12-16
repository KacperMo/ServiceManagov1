import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Company from 'App/Models/Company'
import ProductImg from 'App/Models/ProductImg'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    // username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}).build()

export const CompanyFactory = Factory.define(Company, ({ faker }) => {
  return {
    name: faker.company.name(),
    industry_id: faker.datatype.number(),
    owner_id: faker.datatype.number(),
    city: faker.address.cityName(),
    phone_number: faker.phone.number(' ###-###-###'),
    NIP: faker.lorem.text(),
  }
}).build()

export const ProductImgFactory = Factory.define(ProductImg, ({ faker }) => {
  return {
    url_base: faker.image.imageUrl(),
    img_src1: faker.system.commonFileName('jpg'),
    img_src2: faker.system.commonFileName('jpg'),
    img_src3: faker.system.commonFileName('jpg'),
    img_src4: faker.system.commonFileName('jpg'),
  }
}).build()


