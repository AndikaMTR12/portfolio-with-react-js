import AboutMe from "./componets/aboutMe";
import Hero from "./componets/hero";
import Navbar from "./componets/navbar";
import Service from "./componets/service";
import "./app.css";
import Portfolio from "./componets/portfolio";
import Subscribe from "./componets/subcribe";

const App = () => {
  return (
    <>
      <div className="bg-blue-700">
        <Navbar />
        <Hero />
      </div>
      <AboutMe />
      <Service />
      <Portfolio />
      <Subscribe />
    </>
  );
};

export default App;
