import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sms_apis'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
        .string('company_id')
        .references('companies.id')
        .onDelete('CASCADE')
      table.string('api_key').notNullable().unique()
      table.integer('avaliable_sms',10).nullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
