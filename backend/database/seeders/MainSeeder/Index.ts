import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
// import { UserFactory } from "Database/factories";
// import { CompanyFactory } from 'Database/factories'
// import { ProductImgFactory } from "Database/factories";

export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run();
  }

  public async run() {
    await this.runSeeder(await import("../User"));
    // await UserFactory.createMany(10)
    // await this.runSeeder(await import("../ProductImg"));
    // await ProductImgFactory.createMany(10);
  }
}
