import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductImg from 'App/Models/Warehouse/ProductImg'

export default class ProductImgsController {
  public async index ({}: HttpContextContract) {
    return ProductImg.all()
  }

  public async store ({request, response}: HttpContextContract) {
    const urlBase = request.input('url_base')
    const imgSrc1 = request.input('img_src1')
    const imgSrc2 = request.input('img_src2')
    const imgSrc3 = request.input('img_src3')
    const imgSrc4 = request.input('img_src4')

    const ProductImgs = await ProductImg.create({
      url_base: urlBase,
      img_src1: imgSrc1,
      img_src2: imgSrc2,
      img_src3: imgSrc3,
      img_src4: imgSrc4,
    })

    return response.created({data: ProductImgs})
  }

  public async show ({params}: HttpContextContract) {
    const product = await ProductImg.find(params.product_id)

    return product
  }

  public async update ({request, params}: HttpContextContract) {
    const product = await ProductImg.findOrFail(params.product_id)
    const imgSrc1 = request.input('img_src1')
    await product.merge({ img_src1: imgSrc1 }).save()

    return product
  }
  //adonisjs update entiti controller?

  public async destroy ({response, params}: HttpContextContract) {
    const product = await ProductImg.findOrFail(params.product_id)
    await product.delete()

    return response.noContent()
  }
}
