import type { HTMLComponent } from "../model/types"
import { getTheme } from "../core/context"
import { mergeUtilities } from "../core/merge-utilities"
import { applyUtilities } from "../core/utils"

export const Heading: HTMLComponent<"h1"> = ({ children = "", class: className = "text-xl font-bold", theme }) => {
	const merged = mergeUtilities(className)
	const style = applyUtilities(merged, theme ?? getTheme(), false)
	return `<h1 style="${style}">${children}</h1>`
}
