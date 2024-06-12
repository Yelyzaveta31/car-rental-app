import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Catalog from "./pages/Catalog/Catalog"
import Favorite from "./pages/Favorite/Favorite"
import NotFound from "./pages/NotFound/NotFound"
import Layout from "./components/Layout/Layout"


function App() {
  return (
    <Layout>
    <Routes>
<Route path="/" element={<Home />} />
<Route path="catalog" element={<Catalog />} />
<Route path="favorite" element={<Favorite />} />
<Route path="*" element={<NotFound />} />
</Routes>
</Layout>
  );
}

export default App
