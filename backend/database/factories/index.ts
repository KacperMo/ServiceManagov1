import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Company from 'App/Models/Company'
import ProductImg from 'App/Models/ProductImg'
import UserProfile from 'App/Models/UserProfile'
import Affiliation from 'App/Models/Affiliation'
import Supplier from 'App/Models/Supplier'

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
    phone_number: faker.phone.number('###-###-###'),
    nip: faker.lorem.text(),
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

export const UserProfileFactory = Factory.define(UserProfile, ({ faker }) => {
  return {
    position: faker.providers.job(),
    name: faker.name.firstName(),
    surname: faker.system.lastName('jpg'),
    phone: faker.phone.number('###-###-###'),
    email: faker.internet.exampleEmail(),
  }
}).build()

export const AffiliationFactory = Factory.define(Affiliation, ({ faker }) => {
  return {
    percentage_value: faker.datatype.number(20)
  }
}).build()

export const SupplierFactory = Factory.define(Supplier, ({ faker }) => {
  return {
    company_name: faker.company.name(),
    nip: nip: faker.lorem.text(),
    api: faker.internet.url(),
    api_key: faker.internet.password(20),
  }
}).build()


