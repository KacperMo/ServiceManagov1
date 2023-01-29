import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Company from "App/Models/Company";

export default class extends BaseSeeder {
  public static environment = ["development", "testing"];

  public async run() {
    // Write your database queries inside the run method
    //adonis seed using factory?

    await Company.createMany([
      {
        id: "19ef63bd-4852-4206-ba81-6c04098016be",
        name: "Serwis GSM X",
        industry_id: 1,
        // owner_id: 1,
        city: "Warszawa",
        phone_number: "123-123-123",
        nip: "666-666-16-66",
      },
      {
        id: "1806a163-a426-476a-8fdb-a07bca3df519",
        name: "Serwis GSM Y",
        industry_id: 1,
        // owner_id: 2,
        city: "Kraków",
        phone_number: "333-123-123",
        nip: "111-222-33-44",
        logo: "./documents/user/files/user1/logo.png",
      },
      {
        id: "d0d4ad43-81af-420c-b0f4-c24385e65789",
        name: "Serwis GSM Z",
        industry_id: 1,
        // owner_id: 3,
        city: "Sałata",
        phone_number: "444-124-124",
        nip: "444-222-33-44",
        logo: "./documents/user/files/user2/logo.png",
      },
    ]);
  }
}
