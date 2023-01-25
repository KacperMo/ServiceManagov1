import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Company from 'App/Models/Company'
import ProductImg from 'App/Models/ProductImg'
import UserProfile from 'App/Models/UserProfile'
import Affiliation from 'App/Models/Affiliation'
import Supplier from 'App/Models/Supplier'
import Industry from 'App/Models/Industry'
import Category from 'App/Models/Category'
import BusinessCard from 'App/Models/BusinessCard'
import Payment from 'App/Models/Payment'
import CalendarEvent from 'App/Models/CalendarEvent'
import Schooling from 'App/Models/Schooling'
import Notyfication from 'App/Models/Notyfication'
import Product from 'App/Models/Product'
import ServiceOrder from 'App/Models/ServiceOrder'
import ServiceList from 'App/Models/ServiceList'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    // username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}).build()

export const CompanyFactory = Factory.define(Company, ({ faker }) => {
  return {    
    industry_id: faker.datatype.number(),
    owner_id: faker.datatype.number(),
    name: faker.company.name(),
    city: faker.address.cityName(),
    phone_number: faker.phone.number('###-###-###'),
    nip: faker.phone.number('###-###-##-##'),
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
    position: faker.name.jobDescriptor(),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    phone: faker.phone.number('###-###-###'),
    email: faker.internet.exampleEmail(),
  }
}).build()

export const AffiliationFactory = Factory.define(Affiliation, ({ faker }) => {
  return {
    user_id: faker.datatype.number(5),
    percentage_value: faker.datatype.number(20),
    afiliated_company_id: faker.datatype.number(20),
  }
}).build()

export const SupplierFactory = Factory.define(Supplier, ({ faker }) => {
  return {
    company_name: faker.company.name(),
    nip: faker.lorem.text(),
    api: faker.internet.url(),
    api_key: faker.internet.password(20),
  }
}).build()

export const IndustryFactory = Factory.define(Industry, ({ faker }) => {
  //const industries = ['GSM', 'RTV', 'STIHL', 'AUTOMOTIVE', 'GASTRONOMY']
  return {
    //name: faker.helpers.arrayElement(industries),
    name: faker.commerce.department(),
  }
}).build()

export const CategoryFactory = Factory.define(Category, ({ faker }) => {
  const categories = ['Repair', 'RMA', 'Screen replacement', 'Cleaning', 'Program instalations']
  return {
    industry_id: faker.datatype.number(),
    name: faker.helpers.arrayElement(categories),
  }
}).build()

export const BusinessCardFactory = Factory.define(BusinessCard, ({ faker }) => {
  return {
    description: faker.commerce.productDescription(),
    card_owner_id: faker.datatype.uuid(),
    afiliated_company_id: faker.datatype.uuid(),
  }
}).build()

export const PaymentFactory = Factory.define(Payment, ({ faker }) => {
  return {
    company_id: faker.datatype.uuid(),
    ammount: faker.datatype.number(100),
    comfirmation: faker.datatype.boolean(),
  }
}).build()

export const CalendarEventFactory = Factory.define(CalendarEvent, ({ faker }) => {
  const rank = ['Danger', 'Info','Succes']
  return {
    company_id: faker.datatype.uuid(),
    //date: faker.datatype.datetime(),
    //time: faker.datatype.datetime(),
    rank: faker.helpers.arrayElement(rank),
    description: faker.commerce.productDescription(),
  }
}).build()

export const SchoolingFactory = Factory.define(Schooling, ({ faker }) => {
  return {
    name: faker.commerce.productName(),
    title: faker.commerce.productName(),
    lead: 'Adam Nowak',
    url: faker.internet.url(),
    platform: 'YouTube',
  }
}).build()

export const NotyficationFactory = Factory.define(Notyfication, ({ faker }) => {
  const rank = ['Danger', 'Info','Succes']
  return {
    company_id: faker.datatype.uuid(),
    rank: faker.helpers.arrayElement(rank),
    description: faker.commerce.productDescription(),
  }
}).build()

export const ProductFactory = Factory.define(Product, ({ faker }) => {
  return {
    company_id: faker.datatype.uuid(),
    brand: faker.company.bsNoun(),
    model: faker.vehicle.model(),
    symbol: faker.vehicle.vrm(),
    serial_or_imei: faker.vehicle.vin(),
    title: faker.commerce.productName(),
    condition: faker.commerce.productName(),
    is_active: faker.datatype.boolean(),
    quantity: faker.datatype.number(10),
    price: faker.datatype.number(500),
    cost_of_purchase: faker.datatype.number(50),
    is_public: faker.datatype.boolean(),
    invoice: faker.datatype.boolean(),
  }
}).build()

export const ServiceOrderFactory = Factory.define(ServiceOrder, ({ faker }) => {
  return {
    company_id: faker.datatype.uuid(),
    rma: faker.datatype.uuid(),
    type: faker.commerce.department(),
    brand: faker.company.bsNoun(),
    model: faker.vehicle.model(),
    serial_number: faker.vehicle.vin(),
    issue_description: faker.commerce.productDescription(),
    comment: faker.commerce.productDescription(),
    note: faker.commerce.productDescription(),
    repair_costs: faker.datatype.number(200),
    parts_costs: faker.datatype.number(100),
    status: faker.datatype.number(9),
    invoice: faker.datatype.boolean(),
    close: faker.datatype.boolean(),
  }
}).build()

export const ServiceListFactory = Factory.define(ServiceList, ({ faker }) => {
  return {
    company_id: faker.datatype.uuid(),
    s1: faker.commerce.productDescription(),
    s2: faker.commerce.productDescription(),
    s3: faker.commerce.productDescription(),
    s4: faker.commerce.productDescription(),
    s5: faker.commerce.productDescription(),
    s6: faker.commerce.productDescription(),
    s7: faker.commerce.productDescription(),
    s8: faker.commerce.productDescription(),
  }
}).build()
