export function renderTextFromHtml(html: string): string {
	// Remove tags, convert links
	return html
		.replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, "$2 ($1)")
		.replace(/<\/?(table|tr|td|div|[pbiu]|span|strong|em|tbody|thead|tfoot)[^>]*>/gi, " ")
		.replace(/<br\s*\/>/gi, "\n")
		.replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, "\n$1\n")
		.replace(/<[^>]+>/g, "")
		.replace(/\s+/g, " ")
		.trim()
}
