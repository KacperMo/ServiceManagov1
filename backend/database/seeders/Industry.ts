import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Industry from "App/Models/Company/Industry";

export default class extends BaseSeeder {
  public async run() {
    await Industry.createMany([
      {
        name: "GSM",
      },
      {
        name: "IT",
      },
      {
        name: "STIHL",
      },
      {
        name: "RTV",
      },
      {
        name: "AGD",
      },
      {
        name: "BICYCLE",
      },
      {
        name: "AUTOMOTIV",
      },
    ]);
  }
}
