import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import Index from "./pages/Index";

function App() {
  return (
    <>
    <Meta/>
    <Routes>
      <Route path="/" element={<Index/>} />
    </Routes>
    </>
  );
}

export default App;
