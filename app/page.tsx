import About from "@/components/about";
import Contact from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import OpenSource from "@/components/opensource";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
