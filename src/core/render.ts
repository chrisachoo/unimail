import type { RenderEmailOptions } from "../model/types"
import { defaultTheme } from "../styles/defaults"
import { mergeUtilities } from "./merge-utilities"
import { cssVarsInlineStyle, themeToCssVars } from "./theme"
import { applyUtilities } from "./utils"

export function renderEmail(options: RenderEmailOptions): string {
	const {
		body,
		containerClass = "bg-white p-4",
		includeCssVarsInBody = true,
		lang = "en",
		preheader = "",
		theme = defaultTheme,
		width = 600
	} = options

	const merged = mergeUtilities(containerClass)
	const style = applyUtilities(merged, theme, true)
	const preheaderSpan = preheader
		? `<span style="display:none!important;visibility:hidden;mso-hide:all;opacity:0;color:transparent;height:0;width:0;overflow:hidden">${preheader}</span>`
		: ""

	const vars = themeToCssVars(theme)
	const bodyVars = includeCssVarsInBody ? cssVarsInlineStyle(vars) : ""

	return `<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0;padding:0;${bodyVars}">
    ${preheaderSpan}
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="${width}">
      <tr>
        <td style="${style}">
          ${body}
        </td>
      </tr>
    </table>
  </body>
</html>`
}
