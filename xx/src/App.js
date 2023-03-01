import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";



function App() {
  return (
    // <h1>Wow</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
