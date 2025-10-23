import type { MailTransport, SendInput, SendResult } from "@lib/model"

export function resendTransport(apiKey: string): MailTransport {
	return {
		name: "resend",
		async send(input: SendInput): Promise<SendResult> {
			try {
				const res = await fetch("https://api.resend.com/emails", {
					body: JSON.stringify({
						from: input.from,
						html: input.html,
						subject: input.subject,
						text: input.text,
						to: Array.isArray(input.to) ? input.to : [input.to]
					}),
					headers: {
						"Authorization": `Bearer ${apiKey}`,
						"Content-Type": "application/json"
					},
					method: "POST"
				})
				const ok = res.ok
				const body = ok ? await res.json() : await res.text()
				return { id: (body as any)?.id, ok, provider: "resend", response: body, status: res.status }
			}
			catch (error) {
				return { ok: false, provider: "resend", response: String(error), status: 0 }
			}
		}
	}
}
