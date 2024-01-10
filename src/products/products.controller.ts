import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productServices: ProductsService) {}
  @Post()
  addProducts(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productServices.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );

    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productServices.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productServices.getSingleProduct(prodId);
  }
}
