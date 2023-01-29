import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Company from "App/Models/Company/Company";

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public companyId: string;

  // @column()
  // public category: string

  // @column()
  // public brand: string;

  @column()
  public model: string;

  // @column()
  // public symbol: string;

  // @column()
  // public serial_or_imei: string;

  @column()
  public name: string;

  @column()
  public description: string;

  // @column()
  // public condition: string;

  @column()
  public quantity: number;

  @column()
  public price: number;

  @column()
  public cost_of_purchase: number;

  @column()
  public is_active: boolean;

  // @column()
  // public origin: string;

  // @column()
  // public is_public: boolean;

  // @column()
  // public invoice: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>;
}
