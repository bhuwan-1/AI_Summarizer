import Hero from "./components/Hero"
// import Demo from "./components/Demo"
import DemoT from "./components/DemoT"

import './App.css'


const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient"/>
        </div>

        <div className="app">
            <Hero />
            <DemoT />
        </div>
    </main>
  )
}

export default App