import type { HTMLComponent } from "../model"
import { getTheme } from "../core/context"
import { mergeUtilities } from "../core/merge-utilities"
import { applyUtilities } from "../core/utils"

export const Divider: HTMLComponent<"hr"> = ({ class: className = "border", theme }) => {
	const merged = mergeUtilities(className)
	const style = applyUtilities(merged, theme ?? getTheme(), false)
	return `<hr style="${style}"/>`
}
