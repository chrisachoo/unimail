import type { Theme } from "../model/types"
import { UTILITIES } from "../styles/utilities"
import { resolveCssVariables, themeToCssVars } from "./theme"

/**
 * Converts utility class list → inline CSS
 */
export function applyUtilities(classes: string = "", theme?: Theme, resolveVars: boolean = false): string {
	const css = classes
		.split(/\s+/)
		.map(cls => UTILITIES[cls] || "")
		.join("")

	if (!theme || !resolveVars)
		return css
	const vars = themeToCssVars(theme)
	return resolveCssVariables(css, vars)
}
