import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'schoolings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name',30).notNullable()
      table.string('title',30).notNullable()
      table.string('lead',40).notNullable()
      table.string('platform',30).notNullable()
      table.string('url',30).notNullable()
      table.datetime('date', { useTz: true })
      table.datetime('duration', { useTz: true })
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
