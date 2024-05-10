import LeftSidePanel from "./components/left-side-panel";
import MainContent from "./components/main-content";
import MainHeader from "./components/main-header";
import RightSidePanel from "./components/right-side-panel";

function App() {
  return (
    <main>
      <MainHeader />
      <article className="flex items-start relative inset-0 w-screen h-screen">
        <LeftSidePanel />
        <MainContent />
        <RightSidePanel />
      </article>
    </main>
  );
}

export default App;
