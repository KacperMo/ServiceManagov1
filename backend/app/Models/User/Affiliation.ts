import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Affiliation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: string

  @column()
  public percentageValue: number

  @column()
  public afiliatedCompanyId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
