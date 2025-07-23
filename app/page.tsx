"use client";

import { useState } from "react";
import AvatarWithShadow from "@/components/avatar-with-shadow";
import { ChatBox } from "@/features/chat-box";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <AvatarWithShadow isLoading={isLoading} />
        <ChatBox onPendingChange={setIsLoading} />
      </div>
    </main>
  );
}
