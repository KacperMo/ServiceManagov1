import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_profiles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id')      
      table.string('position', 25)
      table.string('name', 25).notNullable()
      table.string('surname', 25)
      table.string('phone_number', 25).notNullable()
      table.string('email', 25).notNullable()
      table.integer('salary', 5)
      table.string('note', 255)
      table.boolean('is_active').notNullable()
      table.string('avatar', 255)
      table.string('baner', 255)

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
