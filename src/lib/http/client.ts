import { ApolloLink, HttpLink } from '@apollo/client'
import {
	NextSSRInMemoryCache,
	NextSSRApolloClient,
	SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

export function makeClient() {
	const httpLink = new HttpLink({
		uri:
			process.env.NODE_ENV === 'development'
				? 'http://localhost:3000/api'
				: undefined,
	})

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link:
			typeof window === 'undefined'
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						httpLink,
				  ])
				: httpLink,
	})
}

export const client = makeClient()
