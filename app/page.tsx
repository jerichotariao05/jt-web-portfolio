import DataPill from "@/components/DataPill";
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
      <main className="relative flex w-full min-h-dvh items-center justify-center overflow-hidden sm:overflow-visible">
        <Nodes icon={<User className="size-16" />} width={160} height={160} />
        <RadarRing size={620} />
        <RadarRing size={1020} />
        <RadarRing size={1440} />
        <RadarRing size={1460} variant="outline" />
        {/* Projects Zone */}
        <RadarField size={690} rotation={-22}>
          <div className="relative">
            <Nodes
              icon={<BriefcaseBusiness className="size-10" />}
              width={120}
              height={120}
            />
            <DataPill
              title="Stocks Inventory System"
              className="left-[-8%] top-[30%] -translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="Heavenly Garden by Angels"
              className="right-[8%] top-[-2%] translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="Math for Kids"
              className="left-[-40%] bottom-[20%] -translate-x-1/2 translate-y-full"
            />
          </div>
        </RadarField>
        {/* Skills Zone */}
        <RadarField size={790} rotation={108}>
          <div className="relative">
            <Nodes
              icon={<Code className="size-8" />}
              width={100}
              height={100}
            />
            <DataPill
              title="React"
              className="left-[-8%] top-[20%] -translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="PostgreSQL"
              className="left-[-20%] top-[70%] -translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="Next.js"
              className="right-[8%] top-[-8%] translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="Django"
              className="right-[-20%] bottom-[20%] translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="Python"
              className="left-[80%] bottom-[-10%] -translate-x-1/2 translate-y-full"
            />
          </div>
        </RadarField>
        {/* Curiosity Zone*/}
        <RadarField size={590} rotation={-76}>
          <div className="relative">
            <Nodes
              icon={<FileQuestionMark className="size-8" />}
              width={100}
              height={100}
            />
            <DataPill
              title="Things about me"
              className="left-[-12%] top-1/2 -translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="Hobbies"
              className="left-[10%] top-[-10%] -translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="Inspo for this website"
              className="left-[26%] bottom-[-50%] -translate-x-full -translate-y-1/2"
            />
          </div>
        </RadarField>
        <RadarField size={678} rotation={160}>
          <div className="relative">
            <Nodes
              icon={<Send className="size-10" />}
              width={120}
              height={120}
            />
            <DataPill
              title="jerichotariao15@gmail.com"
              className="right-[8%] top-[-2%] translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="LinkedIn"
              className="right-[-8%] top-1/2 translate-x-full -translate-y-1/2"
            />
            <DataPill
              title="GitHub"
              className="left-[-40%] bottom-[20%] -translate-x-1/2 translate-y-full"
            />
          </div>
        </RadarField>
      </main>
    </>
  );
}
