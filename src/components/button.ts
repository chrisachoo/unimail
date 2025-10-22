import type { HTMLComponent, Theme } from "../model/types"

import { getTheme } from "../core/context"
import { mergeUtilities } from "../core/merge-utilities"
import { applyUtilities } from "../core/utils"

export type ButtonProps = {
	href?: string
	class?: string
	children?: string
	target?: string
	theme?: Theme
}

export const Button: HTMLComponent<"a"> = ({
	children = "Button",
	class: className = "",
	href = "#",
	target,
	theme
}) => {
	const mergedClasses = mergeUtilities(className)
	const activeTheme = theme ?? getTheme()
	const style = applyUtilities(mergedClasses, activeTheme, false)

	return `
    <a href="${href}" target="${target || "_blank"}" style="${style}">
      ${children}
    </a>
  `
}
