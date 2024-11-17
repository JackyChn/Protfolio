import Hero from "./_components/Hero";
import { FloatingNav } from "./_components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "../app/_components/Grid";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
        <Projects />
      </div>
    </main>
  );
}
