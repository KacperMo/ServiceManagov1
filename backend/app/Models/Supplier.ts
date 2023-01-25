import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Supplier extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public industry_id: number

  @column()
  public company_name: string

  @column()
  public nip: string

  @column()
  public api: string

  @column()
  public api_key: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
