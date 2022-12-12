import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable().unique()
      table.integer('industry_id',10).notNullable()
      table.integer('owner_id',10).notNullable()
      table.string('city',30).nullable()
      table.string('street',30).nullable()
      table.string('zip_code',40).nullable()
      table.string('house_number',10).nullable()
      table.string('apartment_nuumber',40).nullable()
      table.string('NIP',13).notNullable()
      table.string('phone_number',13).notNullable()
      table.string('email',50).nullable()
      table.string('logo',250).nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
