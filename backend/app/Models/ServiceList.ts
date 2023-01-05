import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ServiceList extends BaseModel {
  @column({ isPrimary: true })
  public company_id: number

  @column()
  public s1: string

  @column()
  public s2: string

  @column()
  public s3: string

  @column()
  public s4: string

  @column()
  public s5: string

  @column()
  public s6: string

  @column()
  public s7: string

  @column()
  public s8: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
