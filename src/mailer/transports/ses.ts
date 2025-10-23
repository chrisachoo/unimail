import type { MailTransport, SendInput, SendResult } from "@lib/model"

export function sesV3Transport({ accessKeyId: _accessKeyId, region: _region, secretAccessKey: _secretAccessKey }: { accessKeyId: string, secretAccessKey: string, region: string }): MailTransport {
	// const endpoint = `https://email.${_region}.amazonaws.com/v2/email/outbound-emails` // SESv2 API
	return {
		name: "ses",
		async send(_input: SendInput): Promise<SendResult> {
			try {
				// For simplicity, use AWS SES v2 "SendEmail" via AWS SDK normally; here we keep it light (unsigned request won't work in prod)
				// Users should plug their own signed fetch or SDK. We return a structured error to indicate missing signing.
				return { ok: false, provider: "ses", response: "SES transport requires AWS Signature V4. Use AWS SDK or custom signer.", status: 0 }
			}
			catch (error) {
				return { ok: false, provider: "ses", response: String(error), status: 0 }
			}
		}
	}
}
