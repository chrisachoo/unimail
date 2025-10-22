import { describe, expect, test } from "bun:test"
import { apply, merge } from "../core/index"

describe("core utilities", () => {
	test("merge overrides earlier utilities of same group", () => {
		const result = merge("text-base text-xl text-white text-black")
		expect(result).toBe("text-xl text-black")
	})

	test("apply maps utilities to inline css (vars)", () => {
		const css = apply("bg-primary text-white p-2 rounded px-4 py-2")
		expect(css).toContain("background-color:var(--colors-primary);")
		expect(css).toContain("color:var(--colors-white);")
		expect(css).toContain("padding:var(--spacing-2);")
		expect(css).toContain("border-radius:var(--radius-md);")
		expect(css).toContain("padding-left:var(--spacing-4);padding-right:var(--spacing-4);")
		expect(css).toContain("padding-top:var(--spacing-2);padding-bottom:var(--spacing-2);")
	})
})
