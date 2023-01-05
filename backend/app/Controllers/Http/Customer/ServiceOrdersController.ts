import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ServiceOrder from 'App/Models/ServiceOrder'

export default class ServiceOrdersController {
  public async index ({}: HttpContextContract) {
    const order = await ServiceOrder.all()
    return order
  }

  public async store ({request, response}: HttpContextContract) {
    const taskData = request.only([
      'title', 'description', 'rma', 'type',
      'brand', 'model', 'serial_number', 'issue_description',
      'comment', 'note', 'nip', 'type_of_payment', 'repair_costs',
      'parts_costs', 'invoice', 'close', 'return'])

    const order = await ServiceOrder.create(taskData)
    response.status(201)
    return order
  }

  public async show ({params}: HttpContextContract) {
    const serviceOrder = await ServiceOrder.find(params.id)
    return serviceOrder
  }

  public async update ({params, request}: HttpContextContract) {
    const taskData = request.only(['repair_costs', 'comment'])
    const order = await ServiceOrder.find(params.id)
    order.merge(taskData)
    await order.save()
    return order
  }

  public async destroy ({ params }: HttpContextContract) {
    const order = await ServiceOrder.find(params.id)
    await order.delete()
    return order
  }
}
