import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table.string("company_id").references("companies.id").onDelete("CASCADE");
      // table.string('category').notNullable()
      // table.string("brand").notNullable();
      table.string("model").nullable();
      // table.string("symbol").nullable();
      // table.string("serial_or_imei").nullable();
      table.string("name"); // .notNullable();
      // table.string("condition").nullable();
      table.string("description").nullable();
      table.integer("quantity").notNullable().defaultTo(1);
      table.integer("price").notNullable();
      table.integer("cost_of_purchase").nullable();
      table.boolean("is_active").notNullable().defaultTo(1);
      // table.string("origin").nullable();
      // table.boolean("is_public").notNullable();
      // table.boolean("invoice").notNullable();
      table.datetime("created_at", { useTz: true });
      table.datetime("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
