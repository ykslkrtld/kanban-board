import React from "react";
import Home from "./pages/Home";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
        <Home />
    </DndProvider>
  );
};

export default App;
