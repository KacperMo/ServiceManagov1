import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Product from "App/Models/Product";

export default class extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        id: "1",
        company_id: "19ef63bd-4852-4206-ba81-6c04098016be",
        // category: 'LCD replacement',
        // brand: 'Samsung',
        model: "s10e",
        // symbol: 'SM-S101FE',
        // serial_or_imei: 'SE23123SASEDR',
        name: "Telefon z sieci Minus",
        // condition: "Nowy",
        quantity: 1,
        price: 200,
        cost_of_purchase: 100,
        is_active: true,
        // is_public: true,
        // invoice: true,
      },
    ]);
  }
}
