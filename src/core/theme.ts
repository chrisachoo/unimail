import type { Theme } from "../model/types"

export function themeToCssVars(theme: Theme): Record<string, string> {
	const vars: Record<string, string> = {}
	for (const [k, v] of Object.entries(theme.colors)) vars[`--colors-${k}`] = v
	for (const [k, v] of Object.entries(theme.radius)) vars[`--radius-${k}`] = v
	for (const [k, v] of Object.entries(theme.spacing)) vars[`--spacing-${k}`] = v
	vars["--font-family"] = theme.fontFamily
	return vars
}

export function cssVarsInlineStyle(vars: Record<string, string>): string {
	return Object.entries(vars)
		.map(([k, v]) => `${k}:${v};`)
		.join("")
}

export function resolveCssVariables(css: string, vars: Record<string, string>): string {
	return css.replace(/var\((--[\w-]+)\)/g, (_, name: string) => vars[name] ?? `var(${name})`)
}
