import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import RecipeDetail from "../pages/RecipeDetail";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";


const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail/>} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
