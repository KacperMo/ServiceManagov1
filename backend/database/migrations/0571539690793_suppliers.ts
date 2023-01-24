import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'suppliers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table
        .integer('industry_id')
        .unsigned()
        .references('industries.id')
        .onDelete('CASCADE')
      table.string('comapny_name').nullable()
      table.string('nip',13).notNullable()
      table.string('api').nullable()
      table.string('api_key').nullable()

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
