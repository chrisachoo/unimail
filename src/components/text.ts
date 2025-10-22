import type { HTMLComponent } from "../model/types"

import { getTheme } from "../core/context"
import { mergeUtilities } from "../core/merge-utilities"
import { applyUtilities } from "../core/utils"

export const Text: HTMLComponent<"p"> = ({
	children = "",
	class: className = "",
	theme
}) => {
	const mergedClasses = mergeUtilities(className)
	const activeTheme = theme ?? getTheme()
	const style = applyUtilities(mergedClasses, activeTheme, false)

	return `<p style="${style}">${children}</p>`
}
