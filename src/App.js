import NavigationBar from "./Components/NavigationBar";
import MovieContainer from "./Components/MovieContainer";
import Footer from "./Components/Footer";
import './styles/moviesDisplay.css'
import Sorted from "./Components/Sorted"

const App = () => {
  return(
    <>
      <NavigationBar />
      <Sorted />
      <div className='movies'>
      <MovieContainer />
      </div>
      <Footer />
      </>
    );
}

export default App;