'use client'
import { PropsWithChildren } from 'react'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'

import { makeClient } from '@/lib/http/client'

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	)
}
