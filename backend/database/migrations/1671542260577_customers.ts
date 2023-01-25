import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .string('company_id')
        .references('companies.id')
        .onDelete('CASCADE')
      table.string('name',15)
      table.string('surname',15)
      table.string('phone_number',16)
      table.string('email',46)
      table.integer('rating',1)
      table.string('about_customer',120)
      table.string('street',64)
      table.string('state',64)
      table.string('zip_code',6)
      table.string('city',48)
      table.string('house_number',5)
      table.string('apartment_number',5)
      table.string('nip',12)
      table.string('company_name',64)
      
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
