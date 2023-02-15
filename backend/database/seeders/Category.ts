import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Category from "App/Models/Company/Category";

export default class extends BaseSeeder {
  public async run() {
    await Category.createMany([
      { industryId: 1, name: "LCD replacement" },
      { industryId: 1, name: "Software update" },
      { industryId: 1, name: "Parts replacement" },
    ]);
  }
}
