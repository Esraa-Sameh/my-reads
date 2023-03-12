import "./App.css";
import { Route, Routes } from "react-router-dom";

import AllBooks from "./pages/AllBooks";
import Search from "./pages/Search";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
