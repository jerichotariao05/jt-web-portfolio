import Heading from "@/components/Heading";
import Nodes from "@/components/Nodes";
import { ModeToggle } from "@/components/ThemeToggle";
import { User } from "lucide-react";

export default function Home() {
  return (
    <>
      <Heading />
      <main className="h-full flex items-center justify-center">
        <Nodes icon={<User className="size-8" />} width={100} height={100} />
      </main>
    </>
  );
}
