import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import Company from "App/Models/Company/Company";

export default class BusinessCard extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public companyId: string;

  @column()
  public description: string;

  // @column()
  // public card_owner_id: string;

  // @column()
  // public afiliated_company_id: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>;
}
