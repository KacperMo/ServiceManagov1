import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')//uuid
      table
        .integer('customer_id')
        .unsigned()
        .references('customers.id')
        .onDelete('CASCADE')
      table
        .integer('img_collection_id')
        .unsigned()
        .references('product_imgs.id')
        .onDelete('CASCADE')
      table.string('rma',50).nullable()
      table.string('type',30).nullable()
      table.string('brand',40).nullable()
      table.string('model',40).nullable()
      table.string('serial_number',50).nullable()
      table.string('issue_description',255).nullable()
      table.string('comment',255).nullable()
      table.string('note',255).nullable()
      table.string('nip',13).nullable()
      table.string('type_of_payment',20).nullable()
      table.integer('repair_costs',10).notNullable()
      table.integer('parts_costs',10).notNullable()
      table.integer('status',1).notNullable()
      table.boolean('invoice').notNullable()
      table.boolean('close').notNullable()
      table.datetime('return', { useTz: true })
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
