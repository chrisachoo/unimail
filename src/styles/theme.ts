import { defaultTheme } from "./defaults"

export type Theme = typeof defaultTheme

export function createTheme(partial?: Partial<Theme>): Theme {
	return {
		...defaultTheme,
		...partial,
		colors: { ...defaultTheme.colors, ...partial?.colors },
		radius: { ...defaultTheme.radius, ...partial?.radius },
		spacing: { ...defaultTheme.spacing, ...partial?.spacing }
	}
}

/**
 * Replaces tokens like var(--color-primary) with actual values.
 */
export function applyThemeTokens(style: string, theme: Theme): string {
	let output = style
	for (const [group, tokens] of Object.entries(theme)) {
		if (typeof tokens === "object") {
			for (const [key, value] of Object.entries(tokens)) {
				const token = `var(--${group}-${key})`
				output = output.replaceAll(token, value)
			}
		}
	}
	return output
}
