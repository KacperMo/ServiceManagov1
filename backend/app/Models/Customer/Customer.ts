import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public company_id: string

  @column()
  public name: string

  @column()
  public surname: string

  @column()
  public phone_number: string

  @column()
  public email: string

  @column()
  public rating: number

  @column()
  public about_customer: string

  @column()
  public street: string

  @column()
  public state: string

  @column()
  public zip_code: string

  @column()
  public city: string

  @column()
  public house_number: string

  @column()
  public apartment_number: string

  @column()
  public nip: string

  @column()
  public company_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
