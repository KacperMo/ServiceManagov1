import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.integer('industry_id')
        .unsigned()
        .references('industries.id')
      table.integer('owner_id',10).notNullable()
      table.string('name').notNullable().index()
      table.string('city',30).nullable()
      table.string('street',30).nullable()
      table.string('zip_code',40).nullable()
      table.string('house_number',10).nullable()
      table.string('apartment_number',40).nullable()
      table.string('nip',13).notNullable().index()
      table.string('phone_number',13).notNullable()
      table.string('email',50).nullable()
      table.string('logo',250).nullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
