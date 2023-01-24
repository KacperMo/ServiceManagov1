import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import Supplier from './Supplier'
import Company from './Company'

export default class Industry extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Category)
  public category: HasMany<typeof Category>
  
  @hasMany(() => Supplier)
  public supplier: HasMany<typeof Supplier>

  @hasMany(() => Company)
  public company: HasMany<typeof Company>
}
