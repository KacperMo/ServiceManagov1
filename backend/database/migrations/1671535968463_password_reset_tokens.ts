import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'password_reset_tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('user_id')
        .references('users.id')
        .onDelete('CASCADE')
      table.string('token')
      table.datetime('created_at', { useTz: true })
      table.datetime('drop_date', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
