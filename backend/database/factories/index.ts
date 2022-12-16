import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Company from 'App/Models/Company'

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

