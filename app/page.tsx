"use client";

import { useState } from "react";
import AvatarWithShadow from "@/components/AvatarWithShadow";
import { ChatBox } from "@/components/ChatBox";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div style={{ viewTransitionName: "avatar-group" }}>
          <AvatarWithShadow isLoading={isLoading} />
        </div>
        <ChatBox onPendingChange={setIsLoading} />
      </div>
    </div>
  );
}
