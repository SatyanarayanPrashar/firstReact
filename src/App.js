import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
    <Navbar title="Edloops" aboutText="About"/>
    <div className="container">
      <TextForm heading="Enter a text to analyze below"/>
    </div>
  </>
  );
}

export default App;
