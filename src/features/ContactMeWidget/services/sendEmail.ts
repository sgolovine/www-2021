import axios from "axios"

type Args = Record<"name" | "email" | "subject" | "message", string>

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: Args): Promise<{ statusCode: number; body: string }> {
  if (process.env.NODE_ENV === "production") {
    const resp = await axios.post<string>("/.netlify/functions/sendEmail", {
      name,
      email,
      subject,
      message,
    })

    return {
      statusCode: resp.status,
      body: resp.data,
    }
  }

  // Return a mock success message when running in development
  return Promise.resolve({
    statusCode: 200,
    body: "Mock Success!",
  })
}
