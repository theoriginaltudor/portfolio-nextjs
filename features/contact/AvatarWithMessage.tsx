import React from "react";
import AvatarWithShadow from "@/components/AvatarWithShadow";

interface AvatarWithMessageProps {
  message?: string;
}

const AvatarWithMessage: React.FC<AvatarWithMessageProps> = ({ message }) => (
  <div className="relative flex items-center justify-center">
    <div style={{ viewTransitionName: "avatar-group" }}>
      <AvatarWithShadow />
    </div>
    {message && (
      <div
        className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 px-4 py-2 rounded-lg shadow-lg max-w-xs text-sm bg-white text-black dark:bg-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700"
        style={{ minWidth: "120px", zIndex: 10 }}
      >
        {message}
        <span
          className="absolute left-full top-1/2 -translate-y-1/2 ml-[-6px] w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-white dark:border-l-zinc-900"
          style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.08))" }}
        />
      </div>
    )}
  </div>
);

export default AvatarWithMessage;
