import previewHtml from "./preview.html"

Bun.serve({
	development: {
		console: true,
		hmr: true
	},
	port: 8080,
	routes: {
		"/": previewHtml
	}
})

// eslint-disable-next-line no-console
console.log("Preview running at http://localhost:8080")
