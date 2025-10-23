import type { Mail, MailerConfig, SendInput, SendResult } from "@lib/model"

import { renderEmail } from "@lib/core/render"

export function createMailer(config: MailerConfig) {
	const { from, transport } = config

	async function sendMail(mail: Mail): Promise<SendResult> {
		const html = renderEmail({
			body: mail.body,
			containerClass: mail.containerClass ?? config.containerClass,
			includeCssVarsInBody: config.includeCssVarsInBody ?? true,
			lang: config.lang,
			preheader: mail.preheader ?? config.preheader,
			theme: config.theme,
			width: config.width
		})

		const input: SendInput = {
			from,
			html,
			subject: mail.subject,
			text: mail.text,
			to: mail.to
		}
		return await transport.send(input)
	}

	return {
		send: sendMail,
		transport
	}
}
