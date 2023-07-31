import Header from "./components/header";
import HeroSection from "./components/herosection";
import Campaigns from "./components/campaigns";
import Categories from "./components/categories";
import Favorites from "./components/favorites";
import Footer from "./components/footer";
import MobileApp from "./components/mobileapp";
import Cards from "./components/cards";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto grid gap-y-6">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
