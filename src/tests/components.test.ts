import { describe, expect, test } from "bun:test"
import { Button, Section, Text } from "../index"

describe("components", () => {
	test("Text renders with inline styles", () => {
		const html = Text({ children: "Hello", class: "text-base" })
		expect(html).toBe("<p style=\"font-size:16px;\">Hello</p>")
	})

	test("Button renders anchor with href and styles", () => {
		const html = Button({ children: "Click", class: "bg-primary text-white p-2 rounded", href: "https://x.test" })
		expect(html).toContain("<a href=\"https://x.test\"")
		expect(html).toContain("background-color:var(--colors-primary);")
		expect(html).toContain("color:var(--colors-white);")
		expect(html).toContain("padding:var(--spacing-2);")
		expect(html).toContain("border-radius:var(--radius-md);")
	})

	test("Section wraps children in table cell with styles", () => {
		const child = Text({ children: "Hi" })
		const html = Section({ children: child, class: "p-4" })
		expect(html).toContain("<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">")
		expect(html).toContain("<td style=\"padding:var(--spacing-4);\">")
		expect(html).toContain(">Hi<")
	})
})
