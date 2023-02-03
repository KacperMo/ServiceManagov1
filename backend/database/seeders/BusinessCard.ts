import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import BusinessCard from "App/Models/Company/BusinessCard";

export default class extends BaseSeeder {
  public async run() {
    await BusinessCard.createMany([
      {
        id: 1,
        companyId: "19ef63bd-4852-4206-ba81-6c04098016be",
        description:
          "Our company guarantees that you will go bankrupt.Your wife will leave you and your daughter will not go to college",
      },
    ]);
  }
}
