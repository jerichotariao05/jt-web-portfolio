import Heading from "@/components/Heading";
import Nodes from "@/components/Nodes";
import RadarField from "@/components/RadarField";
import RadarRing from "@/components/RadarRing";
import { ModeToggle } from "@/components/ThemeToggle";
import {
  User,
  BriefcaseBusiness,
  FileQuestionMark,
  Code,
  Send,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Heading />
      <main className="h-full flex items-center justify-center">
        <Nodes icon={<User className="size-12" />} width={160} height={160} />
        <RadarRing size={620} />
        <RadarRing size={1020} />
        <RadarRing size={1440} />
        <RadarRing size={1460} variant="outline" />
        <RadarField size={780} rotation={-26}>
          <Nodes
            icon={<BriefcaseBusiness className="size-10" />}
            width={120}
            height={120}
          />
        </RadarField>
        <RadarField size={790} rotation={108}>
          <Nodes icon={<Code className="size-8" />} width={100} height={100} />
        </RadarField>
        <RadarField size={590} rotation={-76}>
          <Nodes
            icon={<FileQuestionMark className="size-8" />}
            width={100}
            height={100}
          />
        </RadarField>
        <RadarField size={678} rotation={160}>
          <Nodes icon={<Send className="size-10" />} width={120} height={120} />
        </RadarField>
      </main>
    </>
  );
}
