import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Install } from "@/components/Install";
import { Features } from "@/components/Features";
import { CommandReference } from "@/components/CommandReference";
import { Quickstart } from "@/components/Quickstart";
import { TechnicalDetails } from "@/components/TechnicalDetails";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Install />
        <Features />
        <CommandReference />
        <Quickstart />
        <TechnicalDetails />
      </main>
      <Footer />
    </>
  );
}
