import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm
import { v4 as uuid } from "uuid";

export default class ServiceOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public customerId: number

  @column()
  public rma: string

  @column()
  public type: string

  @column()
  public brand: string

  @column()
  public model: string

  @column()
  public serialNumber: string

  @column()
  public issueDescription: string

  @column()
  public comment: string

  @column()
  public note: string

  @column()
  public nip: string

  @column()
  public paymentType: string

  @column()
  public repairCosts: number

  @column()
  public partsCosts: number

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
