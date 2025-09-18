"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Home() {
  const actions = useChat();

  console.log(actions);

  return <div>heu</div>;
}
