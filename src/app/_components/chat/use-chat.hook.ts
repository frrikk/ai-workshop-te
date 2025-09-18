"use client";

import { useChat as useChatAISDK } from "@ai-sdk/react";

/**
 * En hook levert fra ai-sdket til Vercel. Se docs for mer
 */

export function useChat() {
  const actions = useChatAISDK();

  return { actions };
}
