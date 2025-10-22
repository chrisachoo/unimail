/**
 * Lightweight TailwindMerge-style function.
 * Later classes override earlier ones.
 */
export function mergeUtilities(classes: string = ""): string {
	const seen = new Map<string, string>()
	const tokens = classes.trim().split(/\s+/)

	const classify = (token: string): string => {
		if (token.startsWith("bg-"))
			return "bg"
		if (token.startsWith("px-"))
			return "px"
		if (token.startsWith("py-"))
			return "py"
		if (token.startsWith("p-"))
			return "p"
		if (token.startsWith("rounded"))
			return "rounded"
		if (token.startsWith("shadow"))
			return "shadow"
		if (token === "font-bold" || token === "font-normal")
			return "font-weight"
		if (token.startsWith("text-")) {
			if (/^text-(?:xs|sm|base|lg|xl|[2-9]xl)$/.test(token))
				return "text-size"
			if (/^text-(?:left|center|right|justify)$/.test(token))
				return "text-align"
			return "text-color"
		}
		const [basePart] = token.split("-")
		return basePart ?? token
	}

	for (const token of tokens) {
		const group = classify(token)
		seen.set(group, token)
	}

	return Array.from(seen.values()).join(" ")
}
