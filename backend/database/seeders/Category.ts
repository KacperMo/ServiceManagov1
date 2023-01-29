import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Category from "App/Models/Company/Category";

export default class extends BaseSeeder {
  public async run() {
    await Category.createMany([
      {
        industry_id: 1,
        name: "LCD replacement",
      },
      {
        industry_id: 1,
        name: "Software update",
      },
      {
        industry_id: 1,
        name: "Parts replacement",
      },
    ]);
  }
}
