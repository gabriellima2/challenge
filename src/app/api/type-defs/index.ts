import gql from 'graphql-tag'
import { productTypeDefs } from './product.type-defs'

export const typeDefs = gql`
	${productTypeDefs}
`
