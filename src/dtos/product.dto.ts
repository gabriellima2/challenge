import { ProductEntity } from '@/entities/product.entity'
import { BaseDTO } from './base.dto'

export interface GetAllProductsDTO extends BaseDTO<ProductEntity[]> {}
