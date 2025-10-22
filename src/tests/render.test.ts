import { describe, expect, test } from "bun:test"
import { render } from "../core/index"

describe("renderEmail", () => {
	test("wraps body with table and applies container styles", () => {
		const html = render({ body: "<p>Hello</p>", containerClass: "bg-white p-4" })
		expect(html).toContain("<!DOCTYPE html>")
		expect(html).toContain("<table role=\"presentation\"")
		expect(html).toContain("background-color:#ffffff;")
		expect(html).toContain("padding:16px;")
		expect(html).toContain(">Hello<")
	})

	test("includes preheader when provided", () => {
		const html = render({ body: "x", preheader: "Preview" })
		expect(html).toContain("Preview")
	})
})
