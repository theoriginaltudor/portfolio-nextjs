import AvatarWithShadow from "@/components/AvatarWithShadow";
import { ChatBox } from "@/components/ChatBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div style={{ viewTransitionName: "avatar-group" }}>
          <AvatarWithShadow />
        </div>
        <ChatBox />
      </div>
    </div>
  );
}
