import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  HasOne,
  hasOne,
  belongsTo,
  BelongsTo,
  beforeCreate,
} from "@ioc:Adonis/Lucid/Orm";
import { v4 as uuid } from "uuid";
import Affiliation from "./Affiliation";
import PasswordResetToken from "./PasswordResetToken";
import UserProfile from "./UserProfile";
import Company from "App/Models/Company/Company";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public companyId: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken: string | null;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static assignUuid(user: User) {
    user.id = uuid();
   }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>;

  @hasMany(() => Affiliation)
  public affiliation: HasMany<typeof Affiliation>;

  @hasMany(() => PasswordResetToken)
  public passwordResetToken: HasMany<typeof PasswordResetToken>;

  @hasOne(() => UserProfile)
  public userProfile: HasOne<typeof UserProfile>;
}
