import "./App.css"
import BodyPinkGlow from "./widgets/BodyPinkGlow/BodyPinkGlow";
import Navbar from "./widgets/Navbar/Navbar";

function App() {
  return (
    <BodyPinkGlow>
      <header className="border-2 w-full z-1">
        <Navbar />
      </header>
      <main></main>
      <footer></footer>
    </BodyPinkGlow>
  );
}

export default App;
