import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class SmsApi extends BaseModel {
  @column({ isPrimary: true })
  public company_id: string

  @column()
  public api_key: string

  @column()
  public avaliable_sms: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
