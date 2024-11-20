import Scene3D from "./components/Scene3D";
import SwapInterface from "./components/SwapInterface";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900/20 text-white relative overflow-hidden">
      <Scene3D />

      <div className="relative z-10">
        <nav className="p-6">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            NeonDEX
          </h1>
        </nav>

        <main className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh]">
          <SwapInterface />
        </main>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
    </div>
  );
}

export default App;
