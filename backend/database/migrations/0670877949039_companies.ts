import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "companies";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table
        .integer("industry_id")
        .unsigned()
        .references("industries.id")
        .onDelete("CASCADE");
      table.string("name").notNullable().index();
      table.string("nip", 13).nullable().index();
      table.string("regon", 10).nullable().index();
      table.string("province", 30).nullable(); // województwo
      table.string("district", 30).nullable(); // rejon
      table.string("community", 30).nullable(); // gmina
      table.string("city", 30).nullable();
      table.string("property_number", 10).nullable();
      table.string("apartment_number", 40).nullable();
      table.string("zip_code", 40).nullable();
      table.string("street", 30).nullable();
      table.string("post_city", 30).nullable(); // poczta miasto
      table.string("phone_number", 13).nullable();
      table.string("email", 50).nullable();
      table.string("logo", 250).nullable();
      table.datetime("created_at", { useTz: true });
      table.datetime("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
