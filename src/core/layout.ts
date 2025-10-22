import { Section } from "../components/section"
import { Text } from "../components/text"

export type LayoutParts = {
	header?: string
	body: string
	footer?: string
	containerClass?: string
}

export function layout(parts: LayoutParts): string {
	const { body, containerClass = "bg-surface p-4", footer, header } = parts
	return Section({
		children: `
		  ${header ? Text({ children: header, class: "text-xl font-bold text-center" }) : ""}
		  ${body}
		  ${footer ? Text({ children: footer, class: "text-sm text-center" }) : ""}
		`,
		class: containerClass
	})
}
