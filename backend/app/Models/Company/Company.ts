import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  hasMany,
  HasMany,
  HasOne,
  hasOne,
  beforeCreate,
} from "@ioc:Adonis/Lucid/Orm";
import { v4 as uuid } from "uuid";
import Payment from "../Payment";
import CalendarEvent from "../CalendarEvent";
import Notyfication from "../Notyfication";
import User from "../User";
import Product from "../Product";
import ZplLabel from "../ZplLabel";
import SmsApi from "../SmsApi";
import ServiceList from "../ServiceList";
import Industry from "App/Models/Company/Industry";
import Category from "App/Models/Company/Category";
import BusinessCard from "App/Models/Company/BusinessCard";

export default class Company extends BaseModel {
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string;

  @column()
  public industryId: number;

  @column()
  public categoryId: number;

  @column()
  public name: string;

  @column()
  public nip: string;

  @column()
  public regon: string;

  @column()
  public province: string;

  @column()
  public district: string;

  @column()
  public community: string;

  @column()
  public city: string;

  @column()
  public propertyNumber: string;

  @column()
  public apartmentNumber: string;

  @column()
  public zipCode: string;

  @column()
  public street: string;

  @column()
  public postCity: string;

  @column()
  public phoneNumber: string;

  @column()
  public email: string;

  @column()
  public logo: string;

  @column()
  public rememberMeToken: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static assignUuid(company: Company) {
    company.id = uuid();
  }

  @belongsTo(() => Industry)
  public industry: BelongsTo<typeof Industry>;

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>;

  @hasMany(() => User)
  public users: HasMany<typeof User>;

  @hasMany(() => Product)
  public products: HasMany<typeof Product>;

  @hasMany(() => BusinessCard)
  public businessCards: HasMany<typeof BusinessCard>;

  @hasMany(() => Payment)
  public payment: HasMany<typeof Payment>;

  @hasMany(() => CalendarEvent)
  public calendarEvent: HasMany<typeof CalendarEvent>;

  @hasMany(() => Notyfication)
  public notyfication: HasMany<typeof Notyfication>;

  @hasMany(() => ZplLabel)
  public zplLabel: HasMany<typeof ZplLabel>;

  @hasOne(() => SmsApi)
  public smsapi: HasOne<typeof SmsApi>;

  @hasOne(() => ServiceList)
  public serviceList: HasOne<typeof ServiceList>;
}
