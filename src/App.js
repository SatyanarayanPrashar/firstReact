import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutPg from './components/AboutPg';


function App() {
  return (
  <>
    <Navbar title="Edloops" aboutText="About"/>
    <div className="container">
      <TextForm heading="Enter a text to analyze below"/>
      {/* <AboutPg/> */}
    </div>
  </>
  );
}

export default App;
