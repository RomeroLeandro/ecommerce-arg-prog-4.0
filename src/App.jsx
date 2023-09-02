import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import ProductPage from "./pages/ProductPage";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <Router>
      <Box width="100%">
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/products/:productId" element={<ProductPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
