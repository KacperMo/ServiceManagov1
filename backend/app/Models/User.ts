import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany, HasOne, hasOne  } from '@ioc:Adonis/Lucid/Orm'
import Affiliation from './Affiliation'
import PasswordResetToken from './PasswordResetToken'
import UserProfile from './UserProfile'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public company_id: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
  
  @hasMany(() => Affiliation)
  public affiliation: HasMany<typeof Affiliation>
  
  @hasMany(() => PasswordResetToken)
  public passwordResetToken: HasMany<typeof PasswordResetToken>

  @hasOne(() => UserProfile)
  public userProfile: HasOne<typeof UserProfile>
}
