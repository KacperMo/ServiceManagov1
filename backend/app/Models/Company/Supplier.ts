import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import Industry from "./Industry";

export default class Supplier extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public industryId: number;

  @column()
  public name: string;

  // @column()
  // public nip: string;

  // @column()
  // public regon: string;

  // @column()
  // public province: string;

  // @column()
  // public district: string;

  // @column()
  // public community: string;

  // @column()
  // public city: string;

  // @column()
  // public property_number: string;

  // @column()
  // public apartment_number: string;

  // @column()
  // public zip_code: string;

  // @column()
  // public street: string;

  // @column()
  // public post_city: string;

  // @column()
  // public phone_number: string;

  // @column()
  // public email: string;

  // @column()
  // public logo: string;

  // @column()
  // public api: string;

  // @column()
  // public api_key: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Industry)
  public industry: BelongsTo<typeof Industry>;
}
