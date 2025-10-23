import type { HTMLComponent } from "../model"

export const Spacer: HTMLComponent<"div"> = ({ class: className = "py-2" }) => {
	return `<div style="${className.includes("py-") ? "" : "padding-top:8px;padding-bottom:8px;"}"></div>`
}
