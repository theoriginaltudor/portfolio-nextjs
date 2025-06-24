"use client";

import { useRef } from "react";
import AvatarWithShadow from "@/components/AvatarWithShadow";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <AvatarWithShadow />
        <form
          ref={formRef}
          className="relative w-[90vw] max-w-[90vw] md:w-[32rem] md:max-w-[32rem]"
        >
          <div className="rounded-3xl bg-card/80 shadow w-full p-4 flex flex-col gap-2">
            <textarea
              className="w-full min-h-[120px] bg-transparent text-base resize-none placeholder:text-muted-foreground border-none focus:border-none focus:ring-0 focus:outline-none outline-none"
              placeholder="Hi, I'm Tudor. How can I help you today?"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  formRef.current?.requestSubmit();
                }
              }}
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground select-none pointer-events-none">
                <b>Enter</b>: send, <b>Shift+Enter</b>: newline
              </span>
              <button
                type="submit"
                className="bg-primary text-primary-foreground rounded-3xl px-4 py-2 flex items-center justify-center shadow hover:bg-primary/90 transition-colors text-xs font-semibold cursor-pointer"
                aria-label="Send"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
