import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User/User";

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        id: "1",
        email: "artur-milkowski@tlen.pl",
        password: "12345678",
      },
      {
        id: "2",
        email: "harminder-virk@adonisjs.com",
        password: "secret",
      },
      {
        id: "3",
        email: "julien-ripouteau@adonisjs.com",
        password: "supersecret",
      },
    ]);
  }
}
