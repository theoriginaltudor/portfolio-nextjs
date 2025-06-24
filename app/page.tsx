"use client";

import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <Avatar className="w-64 h-64">
            <AvatarImage src="/tc1_1.jpg" alt="Avatar" />
            <AvatarFallback className="text-7xl">TC</AvatarFallback>
          </Avatar>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full z-[-1] shadow-[0_0_0_8px_rgba(255,255,255,0.2)] before:content-[''] before:absolute before:inset-[-8px] before:rounded-full before:bg-[conic-gradient(from_0deg_at_50%_50%,#ff0080_0%,#7928ca_25%,#0070f3_50%,#00ffb8_75%,#ff0080_100%)] before:blur-[12px] before:opacity-60 before:z-[-2]"
          />
        </div>
        <form ref={formRef} className="relative w-[32rem] max-w-[32rem]">
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
