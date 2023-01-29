import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { UserFactory } from "Database/factories";
import { CompanyFactory } from "Database/factories";
import { ProductImgFactory } from "Database/factories";
import { IndustryFactory } from "Database/factories";

export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run();
  }

  public async run() {
    //await IndustryFactory.createMany(5)
    //await CompanyFactory.createMany(10)
    //await ProductImgFactory.createMany(10)
    //await UserFactory.createMany(10)

    await this.runSeeder(await import("../Industry"));
    await this.runSeeder(await import("../Company"));
    await this.runSeeder(await import("../BusinessCard"));
    await this.runSeeder(await import("../ProductImg"));
    await this.runSeeder(await import("../User"));
  }
}
