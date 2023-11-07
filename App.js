import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Softwareservices from "./Softwareservices";
import Casestudies from "./Casestudies";
import Pricing from "./Pricing";
import Aboutus from "./Aboutus";
import Blog from "./Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="Softwareservices"
            element={<Softwareservices title="Software service" />}
          />
          <Route
            path="Casestudies"
            element={<Casestudies title="Case Studies" />}
          />
          <Route path="Pricing" element={<Pricing title="Pricing" />} />
          <Route path="Aboutus" element={<Aboutus title="About Us" />} />
          <Route path="Blog" element={<Blog title="Blog" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
