import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'calendar_events'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .string('company_id')
        .references('companies.id')
        .onDelete('CASCADE')
      table.string('rank',30).nullable()
      table.string('description',30).nullable()
      table.datetime('event_date', { useTz: true })
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
