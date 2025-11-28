import "./App.css";
import Logo from "./pieces/Logo/Logo";
import BodyPinkGlow from "./widgets/BodyPinkGlow/BodyPinkGlow";
import Hero from "./widgets/Hero/Hero";
import Navbar from "./widgets/Navbar/Navbar";
import NormalBody from "./widgets/NormalBody/NormalBody";

function App() {
  return (
    <BodyPinkGlow>
      <NormalBody>
        <header className="sticky top-0 z-1 flex w-full min-w-dvw flex-row justify-around gap-18 border-b border-b-slate-800 bg-slate-950 py-6">
          <Logo />
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>
          <Hero />
        </main>
        <footer></footer>
      </NormalBody>
    </BodyPinkGlow>
  );
}

export default App;
