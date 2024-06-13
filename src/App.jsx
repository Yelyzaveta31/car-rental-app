import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Catalog from "./pages/Catalog/Catalog"
import Favorites from "./pages/Favorites/Favorites"
import NotFound from "./pages/NotFound/NotFound"
import Layout from "./components/Layout/Layout"


function App() {
  return (
    <Layout>
    <Routes>
<Route path="/" element={<Home />} />
<Route path="catalog" element={<Catalog />} />
<Route path="favorites" element={<Favorites />} />
<Route path="*" element={<NotFound />} />
</Routes>
</Layout>
  );
}

export default App
