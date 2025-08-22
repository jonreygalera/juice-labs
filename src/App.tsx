import Carousel from "./components/Carousel/Carousel"
import Navbar from "./components/Navbar/Navbar"
import juiceData from "./data/juiceData"

function App() {

  return (
    <div>
      <Navbar />
      <Carousel 
        slides={juiceData}
      />
    </div>
  )
}

export default App
