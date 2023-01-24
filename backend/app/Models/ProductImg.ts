import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import ServiceOrder from './ServiceOrder'

export default class ProductImg extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_id: string

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

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>

  @belongsTo(() => ServiceOrder)
  public serviceOrder: BelongsTo<typeof ServiceOrder>
}
