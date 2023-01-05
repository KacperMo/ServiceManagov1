import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'password_reser_tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
        .unsigned()
        .references('user_profiles.id')
        .onDelete('CASCADE')
      table.datetime('created_at', { useTz: true })
      table.datetime('drop_date', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
