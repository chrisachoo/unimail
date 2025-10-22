import { defineConfig } from "tsup"

export default defineConfig(options => ({
	bundle: true,
	clean: true,
	dts: true,
	entry: ["src/index.ts"],
	env: { NODE_ENV: options.watch ? "development" : "production" },
	format: ["esm", "cjs"],
	minify: !options.watch,
	onSuccess: options.watch ? "echo 🧱 Rebuilt Unimail!" : undefined,
	outDir: "dist",
	skipNodeModulesBundle: true,
	sourcemap: false,
	splitting: false,
	target: "esnext",
	treeshake: true,
	watch: options.watch
}))
