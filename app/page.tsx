import Hero from "./_components/Hero";
import { FloatingNav } from "./_components/ui/FloatingNav";
import { navItems } from "@/data";
import Grid from "../app/_components/Grid";
import Projects from "./_components/Projects";
import Clients from "./_components/Clients";

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Clients />
      </div>
    </main>
  );
}
