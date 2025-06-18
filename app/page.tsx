import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <Avatar className="w-64 h-64">
            <AvatarImage src="/tc1_1.jpg" alt="Avatar" />
            <AvatarFallback>TC</AvatarFallback>
          </Avatar>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full z-[-1] shadow-[0_0_0_8px_rgba(255,255,255,0.2)] before:content-[''] before:absolute before:inset-[-8px] before:rounded-full before:bg-[conic-gradient(from_0deg_at_50%_50%,#ff0080_0%,#7928ca_25%,#0070f3_50%,#00ffb8_75%,#ff0080_100%)] before:blur-[12px] before:opacity-60 before:z-[-2]"
          />
        </div>
        <div className="relative w-[32rem] max-w-[32rem] group focus-within/button-enabled">
          <textarea
            className="w-full min-h-[120px] rounded-3xl bg-card/80 p-4 text-base shadow focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground pr-14"
            placeholder="What do you want to know about me?"
          />
          <button
            type="button"
            className="absolute bottom-4 right-3 bg-primary text-primary-foreground rounded-3xl p-2 flex items-center justify-center shadow hover:bg-primary/90 transition-colors text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed group-focus-within:enabled"
            aria-label="Send"
            disabled
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
