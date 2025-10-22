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
