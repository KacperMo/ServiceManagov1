import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserProfile extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public company_id: number

  @column()
  public position: string

  @column()
  public name: string

  @column()
  public surname: string

  @column()
  public phone: string

  @column()
  public email: string

  @column()
  public salary: number

  @column()
  public note: string

  @column()
  public is_active: boolean

  @column()
  public avatar: string

  @column()
  public baner: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
