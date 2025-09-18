import { env } from "@/config";

type StudioData = {
  conversationId: string;
  token: string;
  expires_in: number;
};

/**
 * Henter basic data fra Copilot Studio
 * Dataen brukes videre til å hente samtale (se Postman docs)
 */

async function getChatData(): Promise<StudioData> {
  const res = await fetch(env.BASE_URL + "/api/connect");
  const data = await res.json();

  return data;
}

export default async function Home() {
  const { conversationId, token } = await getChatData();

  return (
    <div className="mx-auto bg-slate-100 max-w-[1200px] p-4 flex flex-col h-dvh rounded-sm my-8">
      <div className="space-y-4">
        <div>
          <p className="font-semibold mb-2">Conversation ID:</p>
          <p className="bg-white p-3 rounded border font-mono text-sm break-all">
            {conversationId}
          </p>
        </div>
        
        <div>
          <p className="font-semibold mb-2">Token:</p>
          <p className="bg-white p-3 rounded border font-mono text-sm break-all overflow-hidden">
            {token}
          </p>
        </div>
        
        <div className="text-xs text-gray-600 mt-4">
          <p>This data is fetched from your Copilot Studio endpoint.</p>
          <p>The token is a JWT that expires in {Math.floor(3600 / 60)} minutes.</p>
        </div>
      </div>
    </div>
  );
}
