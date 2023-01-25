import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_lists'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
        .string('company_id')
        .references('companies.id')
        .onDelete('CASCADE')
      table.string('s1').nullable()
      table.string('s2').nullable()
      table.string('s3').nullable()
      table.string('s4').nullable()
      table.string('s5').nullable()
      table.string('s6').nullable()
      table.string('s7').nullable()
      table.string('s8').nullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
