import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <div className="flex flex-col items-center w-full">
          <Avatar className="w-32 h-32 mb-6">
            <AvatarImage src="/vercel.svg" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Card className="w-full max-w-md flex flex-col items-center p-6">
            <div className="text-xl font-semibold mb-2 text-center">
              Hi, I&apos;m Jane Doe 👋
            </div>
            <div className="text-center text-muted-foreground mb-4">
              Frontend Developer & UI Enthusiast
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="text-sm text-muted-foreground mb-1">
                Chat with me:
              </div>
              <div className="flex gap-2 w-full">
                <Input placeholder="Type a message..." className="flex-1" />
                <Button type="button">Send</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
