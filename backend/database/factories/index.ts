import Factory from "@ioc:Adonis/Lucid/Factory";
import User from "App/Models/User";
import Company from "App/Models/Company/Company";
import ProductImg from "App/Models/ProductImg";
import UserProfile from "App/Models/UserProfile";
import Affiliation from "App/Models/Affiliation";
import Supplier from "App/Models/Company/Supplier";
import Industry from "App/Models/Company/Industry";
import Category from "App/Models/Company/Category";
import BusinessCard from "App/Models/Company/BusinessCard";
import Payment from "App/Models/Payment";
import CalendarEvent from "App/Models/CalendarEvent";
import Schooling from "App/Models/Schooling";
import Notyfication from "App/Models/Notyfication";
import Product from "App/Models/Product";
import ServiceOrder from "App/Models/ServiceOrder";
import ServiceList from "App/Models/ServiceList";
import Customer from "App/Models/Customer";

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
})
  .relation("company", () => CompanyFactory)
  .build();

export const IndustryFactory = Factory.define(Industry, ({ faker }) => {
  //const industries = ['GSM', 'RTV', 'STIHL', 'AUTOMOTIVE', 'GASTRONOMY']
  return {
    //name: faker.helpers.arrayElement(industries),
    name: faker.commerce.department(),
  };
})
  .relation("categories", () => CategoryFactory)
  .relation("suppliers", () => SupplierFactory)
  .relation("companies", () => CompanyFactory)
  .build();

export const CategoryFactory = Factory.define(Category, ({ faker }) => {
  const categories = [
    "Repair",
    "RMA",
    "Screen replacement",
    "Cleaning",
    "Program instalations",
  ];
  return {
    // industry_id: faker.datatype.number(),
    name: faker.helpers.arrayElement(categories),
  };
})
  .relation("industry", () => IndustryFactory)
  .relation("companies", () => CompanyFactory)
  .build();

export const SupplierFactory = Factory.define(Supplier, ({ faker }) => {
  return {
    // id: faker.datatype.uuid(),
    name: faker.company.name(),
    // nip: faker.phone.number("###-###-##-##"),
    // api: faker.internet.url(),
    // api_key: faker.internet.password(20),
  };
})
  .relation("industry", () => IndustryFactory)
  .build();

export const BusinessCardFactory = Factory.define(BusinessCard, ({ faker }) => {
  return {
    description: faker.commerce.productDescription(),
    // card_owner_id: faker.datatype.uuid(),
    // afiliated_company_id: faker.datatype.uuid(),
  };
})
  .relation("company", () => CompanyFactory)
  .build();

export const CompanyFactory = Factory.define(Company, ({ faker }) => {
  return {
    id: faker.datatype.uuid(),
    // industry_id: faker.datatype.number(),
    // owner_id: faker.datatype.number(),
    name: faker.company.name(),
    nip: faker.phone.number("###-###-##-##"),
    regon: faker.phone.number("##########"),
    province: faker.address.state(),
    city: faker.address.cityName(),
    propertyNumber: faker.address.buildingNumber(),
    apartmentNumber: faker.address.buildingNumber(),
    zipCode: faker.address.zipCode(),
    street: faker.address.street(),
    phoneNumber: faker.phone.number("###-###-###"),
    email: faker.internet.email(),
  };
})
  .relation("industry", () => IndustryFactory)
  .relation("category", () => CategoryFactory)
  .relation("users", () => UserFactory)
  .relation("products", () => UserFactory)
  .relation("businessCards", () => UserFactory)
  .build();

export const ProductFactory = Factory.define(Product, ({ faker }) => {
  return {
    id: faker.datatype.uuid(),
    // company_id: faker.datatype.uuid(),
    // brand: faker.company.bsNoun(),
    model: faker.vehicle.model(),
    // symbol: faker.vehicle.vrm(),
    // serial_or_imei: faker.vehicle.vin(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    // condition: faker.commerce.productName(),
    quantity: faker.datatype.number(10),
    price: faker.datatype.number(500),
    cost_of_purchase: faker.datatype.number(50),
    is_active: faker.datatype.boolean(),
    // is_public: faker.datatype.boolean(),
    // invoice: faker.datatype.boolean(),
  };
})
  .relation("company", () => CompanyFactory)
  .build();

export const ProductImgFactory = Factory.define(ProductImg, ({ faker }) => {
  return {
    url_base: faker.image.imageUrl(),
    img_src1: faker.system.commonFileName("jpg"),
    img_src2: faker.system.commonFileName("jpg"),
    img_src3: faker.system.commonFileName("jpg"),
    img_src4: faker.system.commonFileName("jpg"),
  };
}).build();

export const UserProfileFactory = Factory.define(UserProfile, ({ faker }) => {
  return {
    position: faker.name.jobDescriptor(),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    phone: faker.phone.number("###-###-###"),
    email: faker.internet.exampleEmail(),
  };
}).build();

export const AffiliationFactory = Factory.define(Affiliation, ({ faker }) => {
  return {
    user_id: faker.datatype.number(5),
    percentage_value: faker.datatype.number(20),
    afiliated_company_id: faker.datatype.number(20),
  };
}).build();

export const PaymentFactory = Factory.define(Payment, ({ faker }) => {
  return {
    company_id: faker.datatype.uuid(),
    ammount: faker.datatype.number(100),
    comfirmation: faker.datatype.boolean(),
  };
}).build();

export const CalendarEventFactory = Factory.define(
  CalendarEvent,
  ({ faker }) => {
    const rank = ["Danger", "Info", "Succes"];
    return {
      company_id: faker.datatype.uuid(),
      //date: faker.datatype.datetime(),
      //time: faker.datatype.datetime(),
      rank: faker.helpers.arrayElement(rank),
      description: faker.commerce.productDescription(),
    };
  }
).build();

export const SchoolingFactory = Factory.define(Schooling, ({ faker }) => {
  return {
    name: faker.commerce.productName(),
    title: faker.commerce.productName(),
    lead: "Adam Nowak",
    url: faker.internet.url(),
    platform: "YouTube",
  };
}).build();

export const NotyficationFactory = Factory.define(Notyfication, ({ faker }) => {
  const rank = ["Danger", "Info", "Succes"];
  return {
    company_id: faker.datatype.uuid(),
    rank: faker.helpers.arrayElement(rank),
    description: faker.commerce.productDescription(),
  };
}).build();

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
  };
}).build();

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
  };
}).build();

export const CustomerFactory = Factory.define(Customer, ({ faker }) => {
  return {
    company_id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    phone_number: faker.phone.number("###-###-###"),
    email: faker.internet.exampleEmail(),
    rating: faker.datatype.number(10),
    street: faker.address.street(),
    state: faker.address.state(),
    zip_code: faker.address.zipCode("##-###"),
    city: faker.address.cityName(),
    house_number: faker.address.buildingNumber(),
    apartment_number: faker.address.buildingNumber(),
    nip: faker.phone.number("###-###-##-##"),
    company_name: faker.company.name(),
  };
}).build();
