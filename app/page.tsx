import Heading from "@/components/Heading";
import Nodes from "@/components/Nodes";
import RadarRing from "@/components/RadarRing";
import { ModeToggle } from "@/components/ThemeToggle";
import { User } from "lucide-react";

export default function Home() {
  return (
    <>
      <Heading />
      <main className="h-full flex items-center justify-center">
        <Nodes icon={<User className="size-8" />} width={100} height={100} />
        <RadarRing size={620} />
        <RadarRing size={1020} />
        <RadarRing size={1440} />
        <RadarRing size={1460} variant="outline" />
      </main>
    </>
  );
}
