import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import Industry from "./Industry";

export default class Supplier extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public industryId: number;

  @column()
  public company_name: string;

  @column()
  public nip: string;

  @column()
  public api: string;

  @column()
  public api_key: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Industry)
  public industry: BelongsTo<typeof Industry>;
}
