import LeftSidePanel from "./components/left-side-panel";
import MainContent from "./components/main-content";
import RightSidePanel from "./components/right-side-panel";

function App() {
  return (
    <main>
      <header className="md:h-[100px] h-[70px] flex items-center justify-center p-5 border-b bg-gray-50">
        <h2 className="md:text-4xl text-2xl font-semibold text-center capitalize">
          Header
        </h2>
      </header>
      <article className="flex items-start relative inset-0 w-screen h-screen">
        <LeftSidePanel />
        <MainContent />
        <RightSidePanel />
      </article>
    </main>
  );
}

export default App;
