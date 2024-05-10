import { Dispatch, SetStateAction, useState } from "react";

const RightSidePanel = () => {
  const [isPanelOpen, setPanelOpen] = useState(false);
  return isPanelOpen ? (
    <aside
      className={
        "md:basis-1/4 basis-full md:static absolute transition-all right-0 z-50 w-full bg-white shrink-0 border-l h-full p-5"
      }
    >
      <PanelContent setPanelOpen={setPanelOpen} />
    </aside>
  ) : (
    <PanelOpenBtn setPanelOpen={setPanelOpen} />
  );
};

const PanelContent = ({
  setPanelOpen,
}: {
  setPanelOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center justify-between">
      <button
        className="flex items-center justify-center"
        onClick={() => setPanelOpen(false)}
      >
        <span className="iconamoon--arrow-right-2-fill text-3xl"></span>
      </button>
      <h2 className="text-xl font-semibold">Right Side Panel</h2>
    </div>
  );
};

const PanelOpenBtn = ({
  setPanelOpen,
}: {
  setPanelOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setPanelOpen(true)}
      className="md:static absolute right-0 bg-white flex items-center justify-center border py-3 rounded-l-lg md:mt-5 mt-20 hover:bg-gray-50 transition"
    >
      <span className="iconamoon--arrow-right-2-fill text-3xl rotate-180"></span>
    </button>
  );
};
export default RightSidePanel;