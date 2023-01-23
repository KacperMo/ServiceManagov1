import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public industry_id: number;

  @column()
  public owner_id: number;

  @column()
  public name: string;

  @column()
  public city: string;

  @column()
  public street: string;

  @column()
  public zip_code: string;

  @column()
  public house_number: string;

  @column()
  public apartment_number: string;

  @column()
  public nip: string;

  @column()
  public phone_number: string;

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
}
