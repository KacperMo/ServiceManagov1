import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "companies";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").notNullable();
      table.integer("industry_id", 10).notNullable();
      table.integer("owner_id", 10).notNullable();
      table.string("name").notNullable().index();
      table.string("city", 30);
      table.string("street", 30);
      table.string("zip_code", 40);
      table.string("house_number", 10);
      table.string("apartment_number", 40);
      table.string("nip", 13).index();
      table.string("phone_number", 13);
      table.string("email", 50);
      table.string("logo", 250);
      table.datetime("created_at", { useTz: true });
      table.datetime("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
