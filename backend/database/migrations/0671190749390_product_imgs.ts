import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'product_imgs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .string('product_id')
        .references('products.id')
        .onDelete('CASCADE')
      table.string('url_base').notNullable()
      table.string('img_src1').nullable()
      table.string('img_src2').nullable()
      table.string('img_src3').nullable()
      table.string('img_src4').nullable()
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
