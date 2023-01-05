import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public company_id: string

  @column()
  public category: string

  @column()
  public brand: string

  @column()
  public model: string

  @column()
  public symbol: string

  @column()
  public serial_or_imei: string

  @column()
  public title: string

  @column()
  public condition: string

  @column()
  public is_active: boolean

  @column()
  public quantity: number

  @column()
  public price: number

  @column()
  public cost_of_purchase: number

  @column()
  public origin: string

  @column()
  public is_public: boolean

  @column()
  public invoice: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
