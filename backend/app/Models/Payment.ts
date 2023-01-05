import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public company_id: string

  @column()
  public ammount: number

  @column()
  public comfirmation: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
