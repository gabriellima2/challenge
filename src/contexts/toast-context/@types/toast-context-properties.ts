import type { ToastOptions, TypeOptions } from 'react-toastify'

export interface ToastContextProperties {
	notify: (type: TypeOptions, message: string, options?: ToastOptions) => void
}
