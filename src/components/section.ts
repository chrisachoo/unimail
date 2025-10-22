import type { HTMLComponent } from "../model/types"

import { getTheme } from "../core/context"
import { mergeUtilities } from "../core/merge-utilities"
import { applyUtilities } from "../core/utils"

export const Section: HTMLComponent<"table"> = ({
	children = "",
	class: className = "",
	theme
}) => {
	const mergedClasses = mergeUtilities(className)
	const activeTheme = theme ?? getTheme()
	const style = applyUtilities(mergedClasses, activeTheme, false)

	return `
    <table width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td style="${style}">
          ${children}
        </td>
      </tr>
    </table>
  `
}
