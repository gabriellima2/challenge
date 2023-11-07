import { ApolloServerOptions, BaseContext } from '@apollo/server'
import { productResolvers } from './product.resolvers'

export const resolvers: ApolloServerOptions<BaseContext>['resolvers'] = {
	Query: {
		...productResolvers.Query,
	},
}
