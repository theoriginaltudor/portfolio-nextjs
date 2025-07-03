import React from "react";
import AvatarWithShadow from "@/components/AvatarWithShadow";

interface AvatarWithMessageProps {
  message?: string;
}

const AvatarWithMessage: React.FC<AvatarWithMessageProps> = ({ message }) => (
  <div className="flex flex-col items-center justify-center gap-12 md:gap-8">
    <div style={{ viewTransitionName: "avatar-group" }}>
      <AvatarWithShadow />
    </div>
    {message && (
      <div className="mt-4 px-4 py-2 rounded-lg w-full min-w-16 text-sm bg-white text-black dark:bg-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700">
        {message}
      </div>
    )}
  </div>
);

export default AvatarWithMessage;
