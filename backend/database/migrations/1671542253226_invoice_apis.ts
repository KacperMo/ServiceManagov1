import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'invoice_apis'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('company_id')
      table.string('host_name').nullable()
      table.string('tocken').nullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
