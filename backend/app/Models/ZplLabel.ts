import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ZplLabel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public label_name: string

  @column()
  public dpi: string

  @column()
  public height: string

  @column()
  public width: string

  @column()
  public zpl: string

  @column()
  public public: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
