import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'zpl_labels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('label_name',20).notNullable()
      table.string('dpi',5).notNullable()
      table.string('height',30).notNullable()
      table.string('width',30).notNullable()
      table.string('zpl',450).notNullable()
      table.boolean('public').notNullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
