import type { Theme } from "../model"
import { defaultTheme } from "../styles/defaults"

let currentTheme: Theme = defaultTheme

export function setTheme(theme: Theme) {
	currentTheme = theme
}

export function getTheme(): Theme {
	return currentTheme
}
