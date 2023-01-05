import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Affiliation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public percentage_value: number

  @column()
  public afiliated_company_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
