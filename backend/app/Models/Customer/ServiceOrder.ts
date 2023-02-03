import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm
import { v4 as uuid } from "uuid";

export default class ServiceOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public customer_id: number

  @column()
  public rma: string

  @column()
  public type: string

  @column()
  public brand: string

  @column()
  public model: string

  @column()
  public serial_number: string

  @column()
  public issue_description: string

  @column()
  public comment: string

  @column()
  public note: string

  @column()
  public nip: string

  @column()
  public type_of_payment: string

  @column()
  public repair_costs: number

  @column()
  public parts_costs: number

  @column()
  public status: number

  @column()
  public invoice: boolean

  @column()
  public close: boolean

  @column()
  public return: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @beforeCreate()
  public static assignUuid(order: ServiceOrder) {
    order.id = uuid();
  }
}
