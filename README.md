# 🪶 Unimail

> A lightweight, framework-agnostic email templating library for building beautiful HTML emails — no React required.

Unimail lets you compose styled, standards-compliant emails with simple HTML components and Tailwind-like utilities.  
No JSX, no build tools — just TypeScript and clean HTML.

---

## 🚀 Features

- 🌍 Framework-agnostic (works in Bun, Node, Deno)
- 💅 Tailwind-like utility styling (compiled to inline CSS)
- 🧠 Type-safe components
- ⚡ Super lightweight (<15KB)
- 📦 Easy to integrate with any mailer (`nodemailer`, `resend`, etc.)

---

## 🧰 Installation

```bash
bun add unimail
```

---

## 🧩 Usage

```ts
import { Section, Text, Button, createTheme, createMailer } from "unimail"
// core utilities
import { merge, apply, render, renderText, layout } from "unimail/core"
// transports
import { resendTransport } from "unimail/mailer/transports"

const email = Section({
	class: "bg-white p-4 rounded shadow-sm",
	children: `
    ${Text({ class: "text-xl font-bold text-center", children: "Welcome to Unimail!" })}
    ${Text({ class: "text-base", children: "Build beautiful HTML emails anywhere." })}
    ${Button({
			href: "https://unimail.dev",
			class: "bg-blue text-white p-2 rounded px-4 py-2",
			children: "Get Started"
		})}
  `
})

console.log(email)
```

Output:

```html
<table
	width="100%"
	cellspacing="0"
	cellpadding="0"
>
	<tr>
		<td
			style="background-color:#ffffff;padding:16px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,0.1);"
		>
			<p style="font-size:20px;font-weight:bold;text-align:center;">
				Welcome to Unimail!
			</p>
			<p style="font-size:16px;">Build beautiful HTML emails anywhere.</p>
			<a
				href="https://unimail.dev"
				target="_blank"
				style="background-color:#2563eb;color:#ffffff;padding:8px 16px;border-radius:6px;"
				>Get Started</a
			>
		</td>
	</tr>
</table>
```

---

## 🧠 Why Unimail?

- Works anywhere (Bun, Node, Deno, edge runtimes)
- No dependencies — blazing fast
- Familiar Tailwind-like syntax
- Inline CSS for reliable email client rendering
- Easily extendable with your own components

---

## 📦 Package API

Public exports:

- `Section(props)` → string
- `Text(props)` → string
- `Button(props)` → string
- `mergeUtilities(classList)` → string
- `applyUtilities(classList)` → string
- `render(options)` → string
- `renderText(html)` → string
- `layout({ header, body, footer })` → string
- `UTILITIES` → Record<string, string>

Types:

- `HTMLComponent<TTag>`
- `RenderEmailOptions`

---

### 🎨 Custom Themes

Unimail supports theming out of the box.

```ts
import { createTheme, Button } from "unimail"

const myTheme = createTheme({
	colors: {
		primary: "#9333ea",
		background: "#faf5ff",
		text: "#1e1b4b"
	},
	radius: { md: "12px" }
})

const html = Button({
	href: "https://unimail.dev",
	class: "bg-primary text-white px-4 py-2 rounded",
	children: "Try Unimail",
	theme: myTheme
})

console.log(html)
```

Optional global helpers:

````ts
import { setTheme, getTheme } from "unimail/core";
---

## ✉️ Mailer (Config + Transports)

```ts
import { createMailer, createTheme } from "unimail";
import { resendTransport } from "unimail/mailer/transports";

const theme = createTheme({ colors: { primary: "#9333ea" } });

const mailer = createMailer({
  from: "no-reply@yourapp.dev",
  transport: resendTransport(process.env.RESEND_API_KEY!),
  theme,
});

await mailer.send({
  to: "user@example.com",
  subject: "Welcome",
  body: layout({
    header: "Welcome",
    body: Button({ href: "https://unimail.dev", class: "bg-primary text-white px-4 py-2 rounded", children: "Get started", theme })
  }),
  preheader: "Quick preview",
});
````

---

## 🧪 Sandbox and Preview

- `render()` injects CSS variables on `<body>` for theme-aware preview.
- Use a simple HTML page or framework to display the returned HTML for live previews.
- Dark/light support comes from your theme tokens; create separate `darkTheme` and `lightTheme`, render both for testing.

setTheme(myTheme) // apply globally
getTheme() // returns current theme

```

---

## 🏗️ Build & Local Dev

- Build library: `bun run build`
- Run demo: `bun run src/examples/demo.ts`

Dist output:

- ESM: `dist/index.js`
- CJS: `dist/index.cjs`
- Types: `dist/index.d.ts`

---

## 📜 License

MIT © 2025

---

### Maintainers

This project is maintained by:

- [chrisachoo](https://github.com/chrisachoo) (GitHub)
```
