import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { env } from "@/config";

const copilotStudio = ({ token, convId }: { token: string; convId: string }) =>
  createOpenAICompatible({
    name: "cr711_frikksTestbot",
    baseURL: `${env.NEXT_PUBLIC_DIRECT_LINE_ENDPOINT}/conversations/${convId}/activities`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    apiKey: token,
  });

export { copilotStudio };
