import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityHero from "./components/community/CommunityHero";
import PageCustomerLove from "./components/customerLove/PageCustomerLove";
import Footer from "./components/common/Footer.jsx";
import Navbar from "./components/common/Navbar/Navbar.jsx";
import Promotional from "./components/common/Promotional.jsx"
// import DogProducts from "./pages/DogProducts";
import Home from "./pages/Home";
// import DogCategory from "./pages/DogCategory";
import ProductPage from "./pages/ProductPage"
import ProductGrid from "./components/ProductGrid/ProductGrid.jsx";
import ProductSearch from "./components/ProductGrid/ProductSearch.jsx"
import CartItems from "./pages/CartPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <Promotional/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<CommunityHero />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/customer-love" element={<PageCustomerLove />} />
          <Route path="/search/:category/:sub_category" element={<ProductSearch/>} />
          <Route path="/Dog_Food" element={<ProductGrid category={'Dog'} sub_category={'Food'}/>} />
          <Route path="/Dog_Treats" element={<ProductGrid category={'Dog'} sub_category={'Treats'}/>} />
          <Route path="/Dog_Bed" element={<ProductGrid category={'Dog'} sub_category={'Bed'}/>} />
          <Route path="/Dog_Grooming" element={<ProductGrid category={'Dog'} sub_category={'Grooming'}/>} />
          <Route path="/Cat_Food" element={<ProductGrid category={'Cat'} sub_category={'Food'}/>} />
          <Route path="/Cat_Treats" element={<ProductGrid category={'Cat'} sub_category={'Treats'}/>} />
          <Route path="/Cat_Bed" element={<ProductGrid category={'Cat'} sub_category={'Bed'}/>} />
          <Route path="/Cat_Grooming" element={<ProductGrid category={'Cat'} sub_category={'Grooming'}/>} />
          <Route path="/Rabbit" element={<ProductGrid category={'Others'} sub_category={'Rabbit'}/>} />
          <Route path="/Birds" element={<ProductGrid category={'Others'} sub_category={'Birds'}/>} />


          <Route path="/:category/:sub_category/:productId" element={<ProductPage/>} />
          {/* <Route path="/dog-products/:dynamic" element={<DogCategory />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
