/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { ServiceManago: "v2.0" };
});

Route.group(() => {
Route.resource("users", "User/UsersController").apiOnly();
Route.resource("profile", "User/UserProfilesController").apiOnly();
Route.resource("companies", "Company/CompaniesController").apiOnly();
Route.resource("tickets", "Customer/ServiceOrdersController").apiOnly();
 }).middleware(['auth'])

Route.post("login", "AuthController.login");
Route.post("logout", "AuthController.logout");
Route.post("register", "AuthController.register");
