import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/footer/footer";
import GuideBanner from "./Components/guideBanner/guideBanner";
import HolidayBanner from "./Components/holidayBanner/holidayBanner";
import NewRecips from "./Components/newRecips/newRecips";
import SearchBar from "./Components/searchBar/searchBar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SearchBar/>
     <HolidayBanner/>
     <GuideBanner/>
     <NewRecips/>
     <Footer/>
    </div>
  );
}

export default App;
