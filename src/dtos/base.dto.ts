import { ApolloError } from '@apollo/client'

export interface BaseDTO<T> {
	data: T
	error?: ApolloError | Error
}
