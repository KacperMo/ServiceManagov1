import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: "artur-milkowski@tlen.pl",
        password: "12345678",
      },
      {
<<<<<<< Updated upstream
        email: "harminder-virk@adonisjs.com",
        password: "secret",
      },
      {
        email: "jan-kowalski@gmail.com",
        password: "supersecret",
      },
    ]);
=======
        email: 'harminder-virk@adonisjs.com',
        password: 'secret',
      },
      {
        email: 'julien-ripouteau@adonisjs.com',
        password: 'supersecret',
      },
    ])
>>>>>>> Stashed changes
  }
}
