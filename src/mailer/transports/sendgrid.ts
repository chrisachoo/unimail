import type { MailTransport, SendInput, SendResult } from "@lib/model"

export function sendgridTransport(apiKey: string): MailTransport {
	return {
		name: "sendgrid",
		async send(input: SendInput): Promise<SendResult> {
			try {
				const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
					body: JSON.stringify({
						content: [
							{ type: "text/plain", value: input.text ?? "" },
							{ type: "text/html", value: input.html }
						],
						from: { email: input.from },
						personalizations: [{ to: (Array.isArray(input.to) ? input.to : [input.to]).map(e => ({ email: e })) }],
						subject: input.subject
					}),
					headers: {
						"Authorization": `Bearer ${apiKey}`,
						"Content-Type": "application/json"
					},
					method: "POST"
				})
				const ok = res.ok
				const body = ok ? await res.json().catch(() => ({})) : await res.text()
				return { ok, provider: "sendgrid", response: body, status: res.status }
			}
			catch (error) {
				return { ok: false, provider: "sendgrid", response: String(error), status: 0 }
			}
		}
	}
}
