import './App.css'
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

function App() {

  return (
    <>
			<Navbar />
			<Home />
			<Services />
			<About />
		</>
  )
}

export default App
