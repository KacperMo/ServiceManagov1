import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "business_cards";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("company_id").references("companies.id").onDelete("CASCADE");
      table.string("description", 255).nullable();
      // table.integer("afiliated_company_id", 10).notNullable();
      table.datetime("created_at", { useTz: true });
      table.datetime("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
