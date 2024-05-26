import Image from "next/image";
import Hero from "./components/Hero";
import Floating from "./components/Floating";

export default function Home() {
  return (
    <main className="hero h-[300vh]">
      <Hero />
      <Floating />
    </main>
  );
}
