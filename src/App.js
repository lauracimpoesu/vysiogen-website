import "./App.css"
import { Booking } from "./components/Booking"
import { Footer } from "./components/Footer"
import { Homepage } from "./components/Homepage"
import { Mission } from "./components/Mission"
import { Nav } from "./components/Nav"
import { Service } from "./components/Service"

function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <Homepage />
      <Mission />
      <Service />
      <Booking />
      <Footer />
    </div>
  )
}

export default App
