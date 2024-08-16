import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import HomeCardOne from "./components/HomeCardOne";
import HomeCardTwo from "./components/HomeCardTwo";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative z-10">
      <NavBar />
      <section>
        <Hero />
      </section>
      <section>
        <HomeCardOne />
      </section>
      <section>
        <HomeCardTwo />
      </section>
    </main>
  );
}
