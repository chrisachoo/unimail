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
# or
npm install unimail
````

---

## 🧩 Usage

```ts
import { Section, Text, Button } from "unimail";

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
});

console.log(email);
```

Output:

```html
<table width="100%" cellspacing="0" cellpadding="0">
  <tr>
    <td style="background-color:#ffffff;padding:16px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <p style="font-size:20px;font-weight:bold;text-align:center;">Welcome to Unimail!</p>
      <p style="font-size:16px;">Build beautiful HTML emails anywhere.</p>
      <a href="https://unimail.dev" target="_blank" style="background-color:#2563eb;color:#ffffff;padding:8px 16px;border-radius:6px;">Get Started</a>
    </td>
  </tr>
</table>
```

---

## 🧠 Why Unimail?

* Works anywhere (Node, Bun, Deno, edge runtimes).
* No dependencies — blazing fast.
* Familiar Tailwind-like syntax.
* Inline CSS for perfect email client rendering.
* Easily extendable with your own components.

---

## 📜 License

MIT © 2025 

---

### Maintainers

This project is maintained by:

- [chrisachoo](https://github.com/chrisachoo) (GitHub)
