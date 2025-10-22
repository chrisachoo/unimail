import { layout, render } from "../core/index"
import { Button, createMailer, createTheme, Text } from "../index"
import { resendTransport } from "../mailer/transports/resend"

const darkTheme = createTheme({
	colors: {
		background: "#0f172a",
		primary: "#10b981",
		surface: "#1e293b",
		text: "#e2e8f0"
	},
	radius: { md: "10px" }
})

const body = layout({
	body: `
      ${Text({ children: "Styled with a custom theme.", class: "text-base text-white" })}
      ${Button({ children: "Open Unimail", class: "bg-primary text-white px-4 py-2 rounded", href: "https://unimail.dev", theme: darkTheme })}
    `,
	containerClass: "bg-surface p-4",
	footer: "Thanks for trying Unimail!",
	header: "Dark Mode Email"
})

const email = render({ body, preheader: "Build beautiful emails", theme: darkTheme })

// eslint-disable-next-line no-console
console.log(email)

// eslint-disable-next-line node/no-process-env
const mailer = createMailer({ from: "no-reply@example.com", transport: resendTransport(process.env.RESEND_API_KEY || "") })
void mailer.send({ body, subject: "Hello from Unimail", to: "user@example.com" })
