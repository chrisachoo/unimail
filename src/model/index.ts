export type Theme = {
	colors: Record<string, string>
	fontFamily: string
	radius: Record<string, string>
	spacing: Record<number | string, string>
}

export type HTMLComponent<T extends keyof HTMLElementTagNameMap> = (
	props: Omit<Partial<HTMLElementTagNameMap[T]>, "children"> & {
		class?: string
		children?: string
		theme?: Theme
	}
) => string

export type RenderEmailOptions = {
	body: string
	containerClass?: string
	width?: number | string
	preheader?: string
	lang?: string
	theme?: Theme
	resolveVariables?: boolean
	includeCssVarsInBody?: boolean
}

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
