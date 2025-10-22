import type { MailTransport, SendInput, SendResult } from "../mailer/types"
import { describe, expect, test } from "bun:test"
import { createMailer } from "../index"

const fakeTransport: MailTransport = {
	name: "fake",
	async send(input: SendInput): Promise<SendResult> {
		return { id: "msg_123", ok: true, provider: "fake", response: input, status: 202 }
	}
}

describe("createMailer", () => {
	test("renders and sends via transport", async () => {
		const mailer = createMailer({ from: "no-reply@test", transport: fakeTransport })
		const result = await mailer.send({ body: "<p>World</p>", preheader: "Preview", subject: "Hello", to: "a@test" })
		expect(result.ok).toBe(true)
		expect(result.status).toBe(202)
		expect(result.provider).toBe("fake")
	})
})
