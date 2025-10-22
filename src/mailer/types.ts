import type { Theme } from "../model/types"

export type SendInput = {
	from: string
	to: string | string[]
	subject: string
	html: string
	text?: string
}

export type SendResult = {
	ok: boolean
	status: number
	id?: string
	provider?: string
	response?: unknown
}

export type MailTransport = {
	name: string
	send: (input: SendInput) => Promise<SendResult>
}

export type MailerConfig = {
	from: string
	transport: MailTransport
	/** Optional defaults for render */
	containerClass?: string
	width?: number | string
	preheader?: string
	lang?: string
	theme?: Theme
	includeCssVarsInBody?: boolean
}

export type Mail = {
	to: string | string[]
	subject: string
	body: string
	preheader?: string
	containerClass?: string
	text?: string
}
