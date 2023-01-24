import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class InvoiceApi extends BaseModel {
  @column({ isPrimary: true })
  public company_id: string

  @column()
  public host_name: string

  @column()
  public tocken: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
