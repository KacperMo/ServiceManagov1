import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Industry from "./Industry";
import Company from "./Company";

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public industryId: number;

  @column()
  public name: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Industry)
  public industry: BelongsTo<typeof Industry>;

  @hasMany(() => Company)
  public companies: HasMany<typeof Company>;
}
