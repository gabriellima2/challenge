'use client'
import { PropsWithChildren } from 'react'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'
import { ToastProvider } from '@/contexts/toast-context'

import { makeClient } from '@/lib/http/client'

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			<ToastProvider>{children}</ToastProvider>
		</ApolloNextAppProvider>
	)
}
