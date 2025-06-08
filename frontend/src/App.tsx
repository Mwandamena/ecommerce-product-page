import Hero from "./components/main/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
