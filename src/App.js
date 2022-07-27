import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News"
import Footer from "./components/Footer"
import React, { useEffect } from "react";
import AOS from "aos";
import Skelaton from "./components/Skelaton";
function App() {



  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <News  />
<div className="container mx-auto">
<Skelaton/>
</div>
    <Footer/>
    </div>
  );
}

export default App;
