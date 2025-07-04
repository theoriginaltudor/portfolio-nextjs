"use client";

import { useState } from "react";
import AvatarWithShadow from "@/components/AvatarWithShadow";
import { ChatBox } from "@/features/chat/ChatBox";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div style={{ viewTransitionName: "avatar-group" }}>
          <AvatarWithShadow isLoading={isLoading} />
        </div>
        <ChatBox onPendingChange={setIsLoading} />
      </div>
    </main>
  );
}
