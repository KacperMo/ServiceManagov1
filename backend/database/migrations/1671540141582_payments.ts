import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .string('company_id')
        .references('companies.id')
        .onDelete('CASCADE')
      table.integer('ammount',5).notNullable()
      table.boolean('comfirmation',1).nullable()
      table.datetime('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
