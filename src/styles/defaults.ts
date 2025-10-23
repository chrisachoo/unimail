import type { Theme } from "@lib/model"

export const defaultTheme: Theme = {
	colors: {
		background: "#ffffff",
		black: "#000000",
		primary: "#2563eb",
		secondary: "#64748b",
		surface: "#f9fafb",
		text: "#111827",
		white: "#ffffff"
	},
	fontFamily: "Inter, Arial, sans-serif",
	radius: {
		lg: "10px",
		md: "6px",
		sm: "4px",
		xl: "12px"
	},
	spacing: {
		0: "0px",
		1: "4px",
		10: "40px",
		12: "48px",
		2: "8px",
		3: "12px",
		4: "16px",
		5: "20px",
		6: "24px",
		7: "28px",
		8: "32px"
	}
}

export function createTheme(partial: Partial<Theme>): Theme {
	return {
		colors: { ...defaultTheme.colors, ...partial.colors },
		fontFamily: partial.fontFamily ?? defaultTheme.fontFamily,
		radius: { ...defaultTheme.radius, ...partial.radius },
		spacing: { ...defaultTheme.spacing, ...partial.spacing }
	}
}
