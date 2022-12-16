import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProductImg extends BaseModel {
  @column({ isPrimary: true })
  public product_id: number

  @column()
  public url_base: string

  @column()
  public img_src1: string

  @column()
  public img_src2: string

  @column()
  public img_src3: string

  @column()
  public img_src4: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
