import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "categories";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("industry_id")
        .unsigned()
        .references("industries.id")
        .onDelete("CASCADE");
      table.string("name").notNullable();
      table.datetime("created_at", { useTz: true });
      table.datetime("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
