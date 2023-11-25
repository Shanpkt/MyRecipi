import Navbar from "./Components/Navbar/navbar";
import GuideBanner from "./Components/guideBanner/guideBanner";
import HolidayBanner from "./Components/holidayBanner/holidayBanner";
import SearchBar from "./Components/searchBar/searchBar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SearchBar/>
     <HolidayBanner/>
     <GuideBanner/>
    </div>
  );
}

export default App;
